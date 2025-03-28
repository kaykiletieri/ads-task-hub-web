import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-default-auth-layout',
  imports: [],
  templateUrl: './default-auth-layout.component.html',
  styleUrl: './default-auth-layout.component.scss'
})
export class DefaultAuthLayoutComponent {
  @Input() title: string = '';
  @Input() subtitle: string = '';
}
