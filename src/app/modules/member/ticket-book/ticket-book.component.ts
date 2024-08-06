import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TicketBookService } from '../../../core/member/ticket-book.service';

@Component({
  selector: 'app-ticket-book',
  templateUrl: './ticket-book.component.html',
  styleUrl: './ticket-book.component.css'
})
export class TicketBookComponent {
  registrationForm: FormGroup;
  previewData: any;
  showPreview: boolean = false; // Toggle for preview display

  constructor(
    private fb: FormBuilder,
    private registrationService: TicketBookService // Inject service
  ) {
    // Initialize the form with FormBuilder
    this.registrationForm = this.fb.group({
      userName: ['', Validators.required],
      lastName: ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern(/^\+91\s\d{10}$/)]],
      email: ['', [Validators.required, Validators.email]],
      ticketType: ['single'],  // Default value
      spouseName: [''],
      spouseMeal: ['veg'],     // Default value
      userMeal: ['veg']        // Default value
    });

    // Conditional validator for spouseName based on ticketType
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

  // Function to handle preview
  onPreview() {
    if (this.registrationForm.valid) {
      this.previewData = this.registrationForm.value;
      console.log('Preview Data:', this.previewData);

      // Toggle preview display
      this.showPreview = true;
    } else {
      console.log('Form is not valid');
      this.markFormGroupTouched(this.registrationForm);
    }
  }

  // Function to handle form submission
  onSubmit() {
    if (this.registrationForm.valid) {
      const formData = this.registrationForm.value;
      // Save form data to db.json via JSON server
      this.registrationService.saveRegistration(formData).subscribe(
        (response) => {
          console.log('Data saved successfully:', response);
          // Optionally reset the form after successful submission
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

  // Helper function to mark form fields as touched
  private markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
    });
  }
}
