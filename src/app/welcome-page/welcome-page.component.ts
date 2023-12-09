import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrl: './welcome-page.component.css'
})
export class WelcomePageComponent {
  constructor(private router: Router) {}

  navigateToCreateUser() {
    this.router.navigate(['/create-user']);
  }
  navigateToCreateMeeting() {
    this.router.navigate(['/create-meeting']);
  }

}
