import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { emailOrMobileValidator } from '../../../auth/register/validator';
import { MemberRegisterService } from '../../../../core/member/member-register.service';

@Component({
  selector: 'app-member-register',
  templateUrl: './member-register.component.html',
  styleUrl: './member-register.component.css'
})
export class MemberRegisterComponent {


  memberForm: FormGroup;

  constructor(private fb:FormBuilder, private userService:MemberRegisterService, private toastr:ToastrService){
    this.memberForm =this.fb.group({
      memberName:['',Validators.required],
      memberLastName:['',Validators.required],
      memberId:['',Validators.required],
      memberPinLevel:['',Validators.required],
      memberIncharge:['',Validators.required],
      memberTeam:['',Validators.required],
      memberEmail:['',Validators.required],
      memberNumber:['',Validators.required],
      memberGst:['',Validators.required],
      memberSpouseName:['',Validators.required],
      memberAddress1:['',Validators.required],
      memberAddress2:['',Validators.required],
      memberCity:['',Validators.required],
      memberState:['',Validators.required],
      memberCountry:['',Validators.required],
      memberZipCode:['',Validators.required],
    })
  }
  onSubmit() {
    if (this.memberForm.valid) {
      this.userService.createMember(this.memberForm.value).subscribe(response => {
        this.toastr.success('Register successfully!', 'Success', {
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





  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const img = document.getElementById('profileImage') as HTMLImageElement;
        img.src = e.target.result;
      };
      reader.readAsDataURL(input.files[0]);
    }
  }




}
