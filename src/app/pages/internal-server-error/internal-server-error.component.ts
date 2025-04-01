import { Component } from '@angular/core';
import { ErrorLayoutComponent } from '../../shared/error-layout/error-layout.component';
import { AuthLayoutComponent } from "../../shared/auth-layout/auth-layout.component";

@Component({
  selector: 'app-internal-server-error',
  imports: [
    ErrorLayoutComponent
],
  templateUrl: './internal-server-error.component.html',
  styleUrl: './internal-server-error.component.scss'
})
export class InternalServerErrorComponent {

}
