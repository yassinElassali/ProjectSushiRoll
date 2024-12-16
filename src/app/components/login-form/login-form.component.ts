import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EventManager } from '@angular/platform-browser';
import { LoginAPIService } from '../../services/login-api/login-api.service';

@Component({
  selector: 'app-login-form',
  imports: [ReactiveFormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {
  @Output() onLoginSuccessful = new EventEmitter<void>();
  @Output() onLoginError = new EventEmitter<Error>();

  constructor(
    private loginAPI : LoginAPIService,
  ) { }

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(3)]),
  });

  async onSubmit() : Promise<void> {
    if (!this.loginForm.valid) {
      return;
    }

    // facciamo il login e spariamo fuori gli eventi
    try {
      const loginOk = await this.loginAPI.Login(
        this.loginForm.value.email!,
        this.loginForm.value.password!,
      );
      if (loginOk) {
        this.onLoginSuccessful.emit();
      } else {
        const error = new Error('Login not successful');
        this.onLoginError.emit(error);  
      }
    } catch (err) {
      const error = err as Error;
      this.onLoginError.emit(error);
    }
  }
}
