import { Component } from '@angular/core';
import { Auth } from '../services/auth';
@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.html',
  styleUrls: ['./register.css'], // ✅ must be styleUrls and an array
})
export class Register {
  user = {
    firstName: '',
    lastName: '',
    email: '',
    dob: '',
    ssn: '',
    userId: '',
    password: '',
    confirmPassword: '',
  };
  constructor(private authService: Auth) {}

  onSubmit() {
    this.authService.register(this.user).subscribe({
      next: (res) => {
        console.log('User registered successfully:', res);
        alert('Registration successful!');
      },
      error: (err) => {
        console.error('Registration failed:', err);
        alert('Something went wrong. Please try again.');
      },
    });
  }
}
