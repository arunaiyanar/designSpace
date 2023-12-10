import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'create-user',
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.css'
})
export class CreateUserComponent {
  signupForm: FormGroup;

  constructor(private router: Router, private fb: FormBuilder) {
    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });

  }
  public message = "User Creation Completed";

  navigateToWelcomePage() {
    this.router.navigate(['/welcome-page']);
  }
  public myFunc() {
    alert(this.message);
  }

  get name() {
    return this.signupForm.get('name');
  }

  get email() {
    return this.signupForm.get('email');
  }

  get password() {
    return this.signupForm.get('password');
  }

  onSubmit() {
    // Handle form submission
    console.log('Form submitted:', this.signupForm.value);
  }

  
  
}





