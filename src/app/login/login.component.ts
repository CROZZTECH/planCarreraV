import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, 
    private authService: AuthService,
    private router: Router) {}

  onSubmit() {
    if (this.loginForm.valid) {
      const user =  this.authService.login(this.loginForm.value)
      if(user){
        console.log();
        localStorage.setItem('loggedIn', 'true');
        localStorage.setItem('id',  user.id.toString());
        this.router.navigate(['/table']); 
      } else {
        localStorage.setItem('loggedIn', 'false');
        console.log('login failed');
      }
    }
  }

}
