import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-meeting',
  templateUrl: './create-meeting.component.html',
  styleUrl: './create-meeting.component.css'
})
export class CreateMeetingComponent {
  constructor(private router: Router) {}
  public meetingmessage = "Meeting has been scheduled";

  navigateToWelcomePage() {
    this.router.navigate(['/welcome-page']);
  }

  public meetingFunc() {
    alert(this.meetingmessage);
  }
}
