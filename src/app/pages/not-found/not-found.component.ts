import { Component } from '@angular/core';
import { ErrorLayoutComponent } from '../../shared/error-layout/error-layout.component';

@Component({
  selector: 'app-not-found',
  imports: [
    ErrorLayoutComponent
  ],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss'
})
export class NotFoundComponent {

}
