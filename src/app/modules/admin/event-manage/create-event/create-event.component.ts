import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EventService } from '../../../../core/event.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrl: './create-event.component.css'
})
export class CreateEventComponent {
  eventForm: FormGroup;
  pinLevels: string[] = ['HR', 'Senior Manager', 'Accountant', 'Manager'];
  showPinLevelDropdown = false;

  constructor(private fb: FormBuilder, private eventService: EventService, private toastr:ToastrService) {
    this.eventForm = this.fb.group({
      eventName: ['', Validators.required],
      eventStartDate: ['', Validators.required],
      eventEndDate: ['', Validators.required],
      bookingStartDate: ['', Validators.required],
      bookingEndDate: ['', Validators.required],
      eventStartTime: ['', Validators.required],
      eventLocation:['',Validators.required],
      eventEndTime: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
      capacity: ['', [Validators.required, Validators.min(1)]],
      pinLevel: [[], Validators.required],
      images: [[], Validators.required],
      eventDescription: ['', Validators.required]
    });
  }

  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      const files = Array.from(input.files, (file: File) => file.name);
      this.eventForm.patchValue({
        images: files
      });
    }
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
      this.eventService.createEvent(this.eventForm.value).subscribe(response => {
        this.toastr.success('Logged in successfully!', 'Success', {
          timeOut: 3000,
          closeButton: true,
          progressBar: true,
          positionClass: 'toast-top-right',
        });
        console.log('Event created', response);
        // this.eventForm.reset();
        // this.resetPinLevels();
      });
    } else {
      this.toastr.error('Failed to create event. Please try again.', 'Error');

      console.log('Form is invalid');
    }
  }

  resetPinLevels() {
    this.eventForm.controls['pinLevel'].setValue([]);
  }
}
