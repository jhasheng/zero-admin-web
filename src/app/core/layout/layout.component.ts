import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { SidenavComponent } from '../sidenav/sidenav.component';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LayoutComponent implements OnInit {

  @ViewChild(SidenavComponent) sidenav: SidenavComponent

  constructor() { }

  ngOnInit() {
  }
}
