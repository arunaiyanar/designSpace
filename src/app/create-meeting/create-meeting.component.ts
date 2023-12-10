import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-meeting',
  templateUrl: './create-meeting.component.html',
  styleUrl: './create-meeting.component.css'
})
export class CreateMeetingComponent {
  signupForm: FormGroup;

  constructor(private router: Router, private fb: FormBuilder) {
    this.signupForm = this.fb.group({
      meetingTitle: ['', Validators.required],
      date: ['', [Validators.required]],
      time: ['', [Validators.required]],
    });

  }
  public meetingmessage = "Meeting has been scheduled";

  navigateToWelcomePage() {
    this.router.navigate(['/welcome-page']);
  }

  public meetingFunc() {
    alert(this.meetingmessage);
  }

  get meetingTitle() {
    return this.signupForm.get('meetingTitle');
  }

  get date() {
    return this.signupForm.get('date');
  }

  get time() {
    return this.signupForm.get('time');
  }

  onSubmit() {
    // Handle form submission
    console.log('Form submitted:', this.signupForm.value);
  }
}
