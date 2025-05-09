import { Component, Input } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { PrimaryButtonComponent } from '../../components/primary-button/primary-button.component';

@Component({
  standalone: true,
  selector: 'app-error-layout',
  imports: [
    RouterModule,
    PrimaryButtonComponent
  ],
  templateUrl: './error-layout.component.html',
  styleUrl: './error-layout.component.scss'
})
export class ErrorLayoutComponent {
  constructor(private router: Router) {}

  @Input() title: string = '';
  @Input() message: string = '';

  navigateHome() {
    this.router.navigate(['/']);
  }
}
