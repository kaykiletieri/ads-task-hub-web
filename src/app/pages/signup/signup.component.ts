import { Component } from '@angular/core';
import { AuthLayoutComponent } from '../../shared/auth-layout/auth-layout.component';
import { PrimaryInputComponent } from '../../components/primary-input/primary-input.component';
import { PrimaryButtonComponent } from '../../components/primary-button/primary-button.component';

@Component({
  selector: 'app-signup',
  imports: [
    AuthLayoutComponent,
    PrimaryInputComponent,
    PrimaryButtonComponent
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {

}
