import { Component, OnDestroy, ViewEncapsulation, Input, HostListener, Inject } from '@angular/core';
import {
  MediaChange,
  MatchMedia,
  ObservableMedia,
  BreakPointRegistry
} from '@angular/flex-layout';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SidenavComponent implements OnDestroy {

  private _subscription;

  isOpen: boolean;

  toggle() {
    this.isOpen = !this.isOpen;
  }

  constructor( @Inject(ObservableMedia) media) {
    this._subscription = media.subscribe((change: MediaChange) => {
      const isMobile = (change.mqAlias === 'xs') || (change.mqAlias === 'sm');
      this.isOpen = !isMobile;
    });
  }

  ngOnDestroy() {
    this._subscription.unsubscribe();
  }
}
