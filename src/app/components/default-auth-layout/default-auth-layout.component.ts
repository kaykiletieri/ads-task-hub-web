import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-default-auth-layout',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './default-auth-layout.component.html',
  styleUrl: './default-auth-layout.component.scss'
})
export class DefaultAuthLayoutComponent {
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() primaryLinkText: string = '';
  @Input() secondLinkText: string = '';
  @Input() linkUrl: string = '';
  showLink: boolean = true;
}
