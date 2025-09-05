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
    acceptAgreement: false,

    question1: '',
    answer1: '',
    question2: '',
    answer2: '',
    question3: '',
    answer3: '',
    question4: '',
    answer4: '',
  };
  constructor(private authService: Auth) {}
  showSSN: boolean = false;

  toggleSSN() {
    this.showSSN = !this.showSSN;
  }
  formatSSN(event: any) {
    let value = event.target.value.replace(/\D/g, ''); // keep only digits
    if (value.length > 3 && value.length <= 5) {
      value = value.slice(0, 3) + '-' + value.slice(3);
    } else if (value.length > 5) {
      value = value.slice(0, 3) + '-' + value.slice(3, 5) + '-' + value.slice(5, 9);
    }
    event.target.value = value;
    this.user.ssn = value;
  }

  // onSubmit() {
  //   this.authService.register(this.user).subscribe({
  //     next: (res) => {
  //       console.log('User registered successfully:', res);
  //       alert('Registration successful!');
  //     },
  //     error: (err) => {
  //       console.error('Registration failed:', err);
  //     },
  //   });
  // }
  onSubmit(registerForm: any) {
    if (registerForm.invalid || this.user.password !== this.user.confirmPassword) {
      // Angular handles showing error messages inline
      return;
    }

    this.authService.register(this.user).subscribe({
      next: (res) => {
        console.log('User registered successfully:', res);
        alert('Registration successful!');
        registerForm.reset(); // ✅ clear form after success
      },
      error: (err) => {
        console.error('Registration failed:', err);
      },
    });
  }
}
