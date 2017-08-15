/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {
  Component,
  Directive,
  Host,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  OnDestroy,
  Renderer2,
  ElementRef
} from '@angular/core';

import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { MdExpansionPanelHeader, SPACE, ENTER, FocusOriginMonitor } from '@angular/material';
import { ExpansionListComponent, EXPANSION_PANEL_ANIMATION_TIMING } from './expansion-list.component';

/**
 * <md-expansion-panel-header> component.
 *
 * This component corresponds to the header element of an <md-expansion-panel>.
 *
 * Please refer to README.md for examples on how to use it.
 */
@Component({
  moduleId: module.id,
  selector: 'app-expansion-list-header',
  templateUrl: './expansion-list-header.component.html',
  styleUrls: ['./expansion-list-header.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'class': 'mat-expansion-list-header',
    'role': 'button',
    'tabindex': '0',
    '[attr.aria-controls]': '_getPanelId()',
    '[attr.aria-expanded]': '_isExpanded()',
    '[class.mat-expanded]': '_isExpanded()',
    '(click)': '_toggle()',
    '(keyup)': '_keyup($event)'
  },
  animations: [
    trigger('indicatorRotate', [
      state('collapsed', style({ transform: 'rotate(0deg)' })),
      state('expanded', style({ transform: 'rotate(90deg)' })),
      transition('expanded <=> collapsed', animate(EXPANSION_PANEL_ANIMATION_TIMING)),
    ])
  ],
})
export class ExpansionListHeaderComponent extends MdExpansionPanelHeader {

  constructor(
    @Host() panel: ExpansionListComponent,
    _renderer: Renderer2,
    _element: ElementRef,
    _focusOriginMonitor: FocusOriginMonitor,
    _changeDetectorRef: ChangeDetectorRef) {
    super(panel, _renderer, _element, _focusOriginMonitor, _changeDetectorRef);
  }
}
