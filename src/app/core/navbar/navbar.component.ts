import { Component, ViewEncapsulation, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NavbarComponent {

  @Output('toggle') onToggle = new EventEmitter<void>();

  toggleSidebar() {
    this.onToggle.emit();
  }

  constructor() { }
}
