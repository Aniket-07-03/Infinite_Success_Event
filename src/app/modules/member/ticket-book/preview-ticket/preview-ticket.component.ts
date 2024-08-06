import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TicketBookService } from '../../../../core/member/ticket-book.service';

@Component({
  selector: 'app-preview-ticket',
  templateUrl: './preview-ticket.component.html',
  styleUrl: './preview-ticket.component.css'
})
export class PreviewTicketComponent {
  registrationForm: FormGroup;
  previewData: any;
  showPreview: boolean = false;
  isEditing: boolean = false;

  constructor(
    private fb: FormBuilder,
    private registrationService: TicketBookService
  ) {
    this.registrationForm = this.fb.group({
      userName: ['', Validators.required],
      lastName: ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern(/^\+91\s\d{10}$/)]],
      email: ['', [Validators.required, Validators.email]],
      ticketType: ['single'],
      spouseName: [''],
      spouseMeal: ['veg'],
      userMeal: ['veg']
    });

    this.registrationForm.get('ticketType')?.valueChanges.subscribe(value => {
      const spouseNameControl = this.registrationForm.get('spouseName');
      if (value === 'double') {
        spouseNameControl?.setValidators(Validators.required);
      } else {
        spouseNameControl?.clearValidators();
      }
      spouseNameControl?.updateValueAndValidity();
    });
  }

  onPreview() {
    if (this.registrationForm.valid) {
      this.previewData = this.registrationForm.value;
      this.showPreview = true;
      this.isEditing = false;
    } else {
      console.log('Form is not valid');
      this.markFormGroupTouched(this.registrationForm);
    }
  }

  onEdit() {
    this.registrationForm.patchValue(this.previewData);
    this.showPreview = false;
    this.isEditing = true;
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      const formData = this.registrationForm.value;
      this.registrationService.saveRegistration(formData).subscribe(
        (response) => {
          console.log('Data saved successfully:', response);
          this.registrationForm.reset();
          this.showPreview = false;
        },
        (error) => {
          console.error('Error saving data:', error);
        }
      );
    } else {
      console.log('Form is not valid');
      this.markFormGroupTouched(this.registrationForm);
    }
  }

  private markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
    });
  }
}
