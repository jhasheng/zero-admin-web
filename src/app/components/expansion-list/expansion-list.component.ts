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
  Input,
  ViewEncapsulation,
  Optional,
  forwardRef,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { MdExpansionPanel, MdAccordion, MdAccordionDisplayMode, AccordionItem, UniqueSelectionDispatcher } from '@angular/material';


/** MdExpansionPanel's states. */
export type MdExpansionPanelState = 'expanded' | 'collapsed';

/** Time and timing curve for expansion panel animations. */
export const EXPANSION_PANEL_ANIMATION_TIMING = '225ms cubic-bezier(0.4,0.0,0.2,1)';

/**
 * <md-expansion-panel> component.
 *
 * This component can be used as a single element to show expandable content, or as one of
 * multiple children of an element with the CdkAccordion directive attached.
 *
 * Please refer to README.md for examples on how to use it.
 */
@Component({
  moduleId: module.id,
  selector: 'app-expansion-list',
  templateUrl: './expansion-list.component.html',
  styleUrls: ['./expansion-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'class': 'mat-expansion-list',
    '[class.mat-expanded]': 'expanded',
    '[@displayMode]': '_getDisplayMode()',
  },
  providers: [
    { provide: AccordionItem, useExisting: forwardRef(() => ExpansionListComponent) }
  ],
  animations: [
    trigger('bodyExpansion', [
      state('collapsed', style({ height: '0px', visibility: 'hidden' })),
      state('expanded', style({ height: '*', visibility: 'visible' })),
      transition('expanded <=> collapsed', animate(EXPANSION_PANEL_ANIMATION_TIMING)),
    ]),
    trigger('displayMode', [
      state('flat, collapsed', style({ margin: '0' })),
      state('default', style({ margin: '16px 0' })),
      transition('flat <=> collapsed, default <=> collapsed, flat <=> default',
        animate(EXPANSION_PANEL_ANIMATION_TIMING)),
    ]),
  ],
})
export class ExpansionListComponent extends MdExpansionPanel {

  constructor( @Optional() @Host() accordion: MdAccordion,
    _changeDetectorRef: ChangeDetectorRef,
    _uniqueSelectionDispatcher: UniqueSelectionDispatcher) {
    super(accordion, _changeDetectorRef, _uniqueSelectionDispatcher);
  }
}
