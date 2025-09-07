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
    firstName: '',
    lastName: '',
    email: '',
    userId: '',
    password: '',
    confirmPassword: '',
    acceptAgreement: false,

    companyName: '',
    companyType: '',
    tin: '',

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
  checkDuplicateQuestions(): boolean {
    const questions = [
      this.employer.question1,
      this.employer.question2,
      this.employer.question3,
      this.employer.question4,
    ];

    // Filter out empty values
    const selected = questions.filter((q) => q);

    // Return true if duplicates exist
    return new Set(selected).size !== selected.length;
  }

  questions = [
    { value: 'bones', label: 'How many bones have you broken?' },
    { value: 'first-job-city', label: 'In what city or town was your first job?' },
    { value: 'childhood-friend', label: 'What is the name of your favorite childhood friend?' },
    { value: 'street-number', label: 'What is the street number of the house you grew up in?' },
    { value: 'favorite-sport', label: 'What is your favorite sport?' },
    { value: 'first-car-color', label: 'What was the color of your first car?' },
    { value: 'first-car-make', label: 'What was the make and model of your first car?' },
    { value: 'first-pet', label: 'What was the name of your first pet?' },
    { value: 'dream-job', label: 'What was your dream job as a child?' },
    { value: 'highschool-mascot', label: 'What was your high school mascot?' },
  ];

  // showTIN = false;

  toggleTIN() {
    this.showTIN = !this.showTIN;
  }

  formatTIN(event: any) {
    // Remove all non-digits
    let value = event.target.value.replace(/\D/g, '');

    // Limit to max 9 digits (TIN standard length)
    value = value.slice(0, 9);

    // Update input and ngModel
    event.target.value = value;
    this.employer.tin = value;
  }
  errorMessage: string = ''; // <-- new variable to show popups
  successMessage: string = '';

  onSubmit(form: NgForm) {
    if (!form.valid) {
      // Mark all fields as touched to show errors
      Object.values(form.controls).forEach((control) => control.markAsTouched());
      // this.errorMessage = 'Please fill all required fields.';

      return;
    }

    // if (this.employer.password !== this.employer.confirmPassword) {
    //   this.errorMessage = 'Passwords do not match.';
    //   return;
    // }

    // Backend payload
    const payload = {
      firstName: this.employer.firstName,
      lastName: this.employer.lastName,
      emailAddress: this.employer.email,
      userId: this.employer.userId,
      password: this.employer.password,
      repeatPassword: this.employer.confirmPassword,
      acceptTermsIndicator: this.employer.acceptAgreement,
      accountType: 'ICHRA_Employer',
      companyName: this.employer.companyName,
      companyType: this.employer.companyType,
      tin: this.employer.tin.trim(), // now without hyphen
      securityQuestions: [
        this.employer.question1,
        this.employer.question2,
        this.employer.question3,
        this.employer.question4,
      ],
      securityQuestionAnswers: [
        this.employer.answer1,
        this.employer.answer2,
        this.employer.answer3,
        this.employer.answer4,
      ],
    };

    this.authService.registerEmployer(payload).subscribe({
      next: (res) => {
        console.log('Employer registered successfully:', res);
        this.successMessage = 'You have successfully signed up!';
        
        form.reset();
      },
      error: (err) => {
        console.error('Employer Registration failed:', err);
        this.errorMessage = 'Something went wrong';
        // alert('Something went wrong. Please try again.');
      },
    });
  }
}
