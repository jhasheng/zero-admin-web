import {
  Component, OnDestroy, ViewEncapsulation, Input, HostListener, Inject
} from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute, RouterLink, UrlSegment } from '@angular/router';
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
  path: string;

  isOpen: boolean;

  toggle() {
    this.isOpen = !this.isOpen;
  }

  constructor(location: Location, @Inject(ObservableMedia) media) {
    this.path = location.path();
    if (this.path.startsWith('/')) {
      this.path = this.path.slice(1);
    }
    this._subscription = media.subscribe((change: MediaChange) => {
      const isMobile = (change.mqAlias === 'xs') || (change.mqAlias === 'sm');
      this.isOpen = !isMobile;
    });
  }

  // isActive(path) {
  //   return this._currentPath.indexOf(path) > -1;
  // }


  ngOnDestroy() {
    this._subscription.unsubscribe();
  }
}
