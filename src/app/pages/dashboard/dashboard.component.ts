import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  checked = false;
  indeterminate = false;
  align = 'start';
  disabled = false;

  constructor() { }

  ngOnInit() {
  }

}
