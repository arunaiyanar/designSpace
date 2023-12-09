import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'create-user',
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.css'
})
export class CreateUserComponent {
  constructor(private router: Router) {}
  public message = "User Creation Completed";

  navigateToWelcomePage() {
    this.router.navigate(['/welcome-page']);
  }
  public myFunc() {
    alert(this.message);
  }
  
}





