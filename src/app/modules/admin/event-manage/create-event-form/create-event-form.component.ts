import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { EventService } from '../../../../core/event.service';
import * as pako from 'pako';

@Component({
  selector: 'app-create-event-form',
  templateUrl: './create-event-form.component.html',
  styleUrls: ['./create-event-form.component.css']
})
export class CreateEventFormComponent {
  eventForm: FormGroup;
  pinLevels: string[] = ['HR', 'Senior Manager', 'Accountant', 'Manager'];
  showPinLevelDropdown = false;

  constructor(
    private fb: FormBuilder,
    private eventService: EventService,
    private toastr: ToastrService
  ) {
    this.eventForm = this.fb.group({
      eventName: ['', [Validators.required]],
      eventStartDate: ['', Validators.required],
      eventEndDate: ['', Validators.required],
      bookingStartDate: ['', Validators.required],
      bookingEndDate: ['', Validators.required],
      eventStartTime: ['', Validators.required],
      eventLocation: ['', Validators.required],
      eventEndTime: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
      capacity: ['', [Validators.required, Validators.min(1)]],
      pinLevel: [[], Validators.required],
      images: [[], Validators.required],
      eventDescription: ['', Validators.required]
    }, { validator: this.dateRangeValidator });
  }

  dateRangeValidator(group: FormGroup) {
    const start = new Date(group.get('eventStartDate')?.value);
    const end = new Date(group.get('eventEndDate')?.value);
    return start < end ? null : { dateRangeInvalid: true };
  }

  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      const files = Array.from(input.files);
      const compressedFiles = files.map(file => this.compressFile(file));
      Promise.all(compressedFiles).then(compressedFilesData => {
        this.eventForm.patchValue({
          images: compressedFilesData
        });
      });
    }
  }

  compressFile(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsArrayBuffer(file);
      reader.onload = () => {
        const arrayBuffer = reader.result as ArrayBuffer;
        const compressed = pako.deflate(new Uint8Array(arrayBuffer));
        const base64String = btoa(String.fromCharCode(...new Uint8Array(compressed)));
        resolve(base64String);
      };
      reader.onerror = error => reject(error);
    });
  }

  togglePinLevelDropdown() {
    this.showPinLevelDropdown = !this.showPinLevelDropdown;
  }

  onPinLevelChange(level: string, event: Event) {
    const input = event.target as HTMLInputElement;
    const isChecked = input.checked;

    const pinLevelArray = this.eventForm.controls['pinLevel'].value as string[];

    if (isChecked) {
      pinLevelArray.push(level);
    } else {
      const index = pinLevelArray.indexOf(level);
      if (index !== -1) {
        pinLevelArray.splice(index, 1);
      }
    }

    this.eventForm.controls['pinLevel'].setValue(pinLevelArray);
  }

  toggleSelectAll(event: Event) {
    const input = event.target as HTMLInputElement;
    const isChecked = input.checked;

    if (isChecked) {
      this.eventForm.controls['pinLevel'].setValue([...this.pinLevels]);
    } else {
      this.eventForm.controls['pinLevel'].setValue([]);
    }
  }

  isAllSelected() {
    return this.pinLevels.every(level => this.eventForm.controls['pinLevel'].value.includes(level));
  }

  onSubmit() {
    if (this.eventForm.valid) {
      // For demonstration, save data to db.json using eventService
      this.eventService.createEvent(this.eventForm.value).subscribe(response => {
        this.toastr.success('Event created successfully!', 'Success', {
          timeOut: 3000,
          closeButton: true,
          progressBar: true,
          positionClass: 'toast-top-right',
        });
        console.log('Event created', response);
      }, error => {
        this.toastr.error('Failed to create event. Please try again.', 'Error');
        console.error('Error creating event', error);
      });
    } else {
      this.toastr.error('Form is invalid. Please check the fields and try again.', 'Error');
    }
  }

  resetPinLevels() {
    this.eventForm.controls['pinLevel'].setValue([]);
  }
}
