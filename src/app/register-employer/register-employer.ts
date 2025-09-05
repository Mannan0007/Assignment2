import { Component } from '@angular/core';
import { Auth } from '../services/auth';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register-employer',
  standalone: false,
  templateUrl: './register-employer.html',
  styleUrl: './register-employer.css',
})
export class RegisterEmployer {
  employer = {
    companyName: '',
    companyType: '',
    tin: '',
    firstName: '',
    lastName: '',
    email: '',
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
  showTIN = false;

  toggleTIN() {
    this.showTIN = !this.showTIN;
  }

  formatTIN(event: any) {
    let value = event.target.value.replace(/\D/g, ''); // remove non-digits
    if (value.length > 2) {
      value = value.slice(0, 2) + '-' + value.slice(2, 9); // insert dash after 2nd digit
    }
    event.target.value = value; // update input box
    this.employer.tin = value; // update ngModel
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      // mark all fields as touched so errors show
      Object.values(form.controls).forEach((control) => {
        control.markAsTouched();
      });
      return; // stop submission
    }

    this.authService.registerEmployer(this.employer).subscribe({
      next: (res) => {
        console.log('Employer registered successfully:', res);
        alert('Employer Registration successful!');
      },
      error: (err) => {
        console.error('Employer Registration failed:', err);
        alert('Something went wrong. Please try again.');
      },
    });
  }
}
