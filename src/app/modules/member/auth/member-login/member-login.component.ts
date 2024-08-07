import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../../../core/auth.service';
import { MemberRegisterService } from '../../../../core/member/member-register.service';

@Component({
  selector: 'app-member-login',
  templateUrl: './member-login.component.html',
  styleUrl: './member-login.component.css'
})
export class MemberLoginComponent {
  loginForm!: FormGroup;
  inputType: 'email' | 'mobile' = 'email';
  showPassword: boolean = false;

  constructor(
    private fb: FormBuilder,
    private loginService: MemberRegisterService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      mobileNumber: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      password: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
      ]]    });

    this.toggleInputType(this.inputType);
  }

  toggleInputType(type: 'email' | 'mobile') {
    this.inputType = type;
    if (type === 'email') {
      this.loginForm.get('email')?.setValidators([Validators.required, Validators.email]);
      this.loginForm.get('mobileNumber')?.clearValidators();
    } else {
      this.loginForm.get('mobileNumber')?.setValidators([Validators.required, Validators.pattern(/^[0-9]{10}$/)]);
      this.loginForm.get('email')?.clearValidators();
    }
    this.loginForm.get('email')?.updateValueAndValidity();
    this.loginForm.get('mobileNumber')?.updateValueAndValidity();
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
  onSubmit() {
    if (this.loginForm.valid) {
      const loginData = {
        email: this.inputType === 'email' ? this.loginForm.value.email : null,
        mobileNumber: this.inputType === 'mobile' ? this.loginForm.value.mobileNumber : null,
        password: this.loginForm.value.password,
      };

      this.loginService.login(loginData.email, loginData.mobileNumber, loginData.password).subscribe(
        loginSuccess => {
          if (loginSuccess) {
            this.toastr.success('Logged in successfully!', 'Success', {
              timeOut: 3000,
              closeButton: true,
              progressBar: true,
              positionClass: 'toast-top-right',
            });
            this.router.navigate(['/member-dashboard']);
          } else {
            this.toastr.error('Invalid email or password. Please try again.', 'Login Failed', {
              timeOut: 3000,
              closeButton: true,
              progressBar: true,
              positionClass: 'toast-top-right',
            });
            console.log('Login failed');
          }
        },
        error => {
          this.toastr.error('An error occurred. Please try again later.', 'Error', {
            timeOut: 3000,
            closeButton: true,
            progressBar: true,
            positionClass: 'toast-top-right',
          });
          console.error('Login error:', error);
        }
      );
    } else {
      this.toastr.warning('Please fill out the form correctly.', 'Form Invalid', {
        timeOut: 3000,
        closeButton: true,
        progressBar: true,
        positionClass: 'toast-top-right',
      });
    }
  }

}
