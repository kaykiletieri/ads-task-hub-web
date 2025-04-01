import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-auth-layout',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './auth-layout.component.html',
  styleUrl: './auth-layout.component.scss'
})
export class AuthLayoutComponent {
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() primaryLinkText: string = '';
  @Input() secondLinkText: string = '';
  @Input() linkUrl: string = '';
  showLink: boolean = true;
}
