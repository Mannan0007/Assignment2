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
    companyName: '',
    companyType: '',
    tin: '',
  };
  constructor(private authService: Auth) {}

  checkDuplicateQuestions(): boolean {
    const questions = [
      this.user.question1,
      this.user.question2,
      this.user.question3,
      this.user.question4,
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
      return;
    }

    const cleanedSSN = this.user.ssn.replace(/\D/g, ''); // keep only digits if backend wants

    const payload = {
      firstName: this.user.firstName,
      lastName: this.user.lastName,
      emailAddress: this.user.email,
      userId: this.user.userId,
      password: this.user.password,
      repeatPassword: this.user.confirmPassword,
      acceptTermsIndicator: this.user.acceptAgreement,
      dob: this.user.dob, // optionally format if backend requires YYYY-MM-DD
      ssn: cleanedSSN,
      accountType: 'ICHRA_Employee', // fixed for employee
      securityQuestions: [
        this.user.question1,
        this.user.question2,
        this.user.question3,
        this.user.question4,
      ],
      securityQuestionAnswers: [
        this.user.answer1,
        this.user.answer2,
        this.user.answer3,
        this.user.answer4,
      ],
    };

    this.authService.register(payload).subscribe({
      next: (res) => {
        console.log('User registered successfully:', res);
        alert('Registration successful!');
        registerForm.reset();
      },
      error: (err) => {
        console.error('Registration failed:', err);
      },
    });
  }
}
