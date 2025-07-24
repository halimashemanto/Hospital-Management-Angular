import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth-service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
 
  loginForm!: FormGroup;
   errorMessage: string = '';

  constructor(
    private authService: AuthService, 
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

onSubmit(): void {
  if (this.loginForm.invalid) {
    this.errorMessage = 'Please fill in all required fields correctly.';
    return;
  }

  const nurserDetails = this.loginForm.value;

  this.authService.login(nurserDetails).subscribe({
    next: (res) => {
      console.log('Nurse logged in successfully:', res);
      
      this.authService.storeToken(res.token);
      this.router.navigate(['']);


       const role = this.authService.getUserRole();
      console.log('User role:', role);

      if (role === 'admin') {
        this.router.navigate(['/admin']);
      } else if (role === 'nurse') {
        this.router.navigate(['/nursepanel']);
      } 
       else if (role === 'receptionist') {
        this.router.navigate(['/recpanel']);
      } 
       else if (role === 'doctor') {
        this.router.navigate(['/doctorpanel']);
      } else {
        this.errorMessage = 'Unknown user role.';
      }

      this.loginForm.reset();

      

      this.loginForm.reset();
    },
    error: (err) => {
      console.error('Error logging in:', err);
      this.errorMessage = 'Invalid email or password.';
    }
  });
}


}