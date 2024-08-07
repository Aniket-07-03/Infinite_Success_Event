import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { emailOrMobileValidator } from '../../../auth/register/validator';
import { MemberRegisterService, SignUp } from '../../../../core/member/member-register.service';
import { RegisterService } from '../../../../core/register.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-member-register',
  templateUrl: './member-register.component.html',
  styleUrl: './member-register.component.css'
})
export class MemberRegisterComponent {
  registerForm: FormGroup;
  showPassword = false;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private toastr: ToastrService,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobileNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$')]],
    }, {
      validators: emailOrMobileValidator()
    });
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  onSubmit() {
    if (this.registerForm.invalid) {
      this.toastr.error('Please fix the errors in the form.');
      return;
    }

    const newUser = this.registerForm.value;

    this.http.post<SignUp[]>('http://localhost:3000/users', newUser).subscribe(
      response => {
        console.log('User registered:', response);
        this.toastr.success('Registration successful!');
        this.router.navigate(['/login']);  // Redirect to login page or another page
      },
      error => {
        console.error('Registration error:', error);
        this.toastr.error('Registration failed. Please try again.');
      }
    );
  }
}
