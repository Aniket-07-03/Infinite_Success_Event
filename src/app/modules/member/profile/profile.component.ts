import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../core/example.service';
export interface User {
  username: string;
  email: string;
  mobileNumber: string;
}
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  user: User | null = null;

  ngOnInit() {
    // Fetch the logged-in user from localStorage
    const userString = localStorage.getItem('loggedInUser');

    // Log the retrieved string for debugging
    console.log('User String from localStorage:', userString);

    // Parse the userString if it's not null
    if (userString) {
      this.user = JSON.parse(userString);
      console.log('Parsed User Object:', this.user);
    } else {
      console.log('No user data found in localStorage');
    }
  }
}
