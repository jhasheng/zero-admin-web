import { CommonModule } from '@angular/common';

import { NgModule, ModuleWithProviders, OpaqueToken, Optional, SkipSelf, Inject } from '@angular/core';

import { PerfectScrollbarComponent } from './perfect-scrollbar.component';
import { PerfectScrollbarDirective } from './perfect-scrollbar.directive';

import { IPerfectScrollbarOptions } from './perfect-scrollbar.options.interface';
import { PerfectScrollbarOptions } from './perfect-scrollbar.options';

export const PERFECT_SCROLLBAR_GUARD = new OpaqueToken('PERFECT_SCROLLBAR_GUARD');
export const PERFECT_SCROLLBAR_CONFIG = new OpaqueToken('PERFECT_SCROLLBAR_CONFIG');

@NgModule({
  imports: [CommonModule],
  declarations: [PerfectScrollbarComponent, PerfectScrollbarDirective],
  exports: [CommonModule, PerfectScrollbarComponent, PerfectScrollbarDirective]
})
export class PerfectScrollbarModule {

  static forRoot(config?: IPerfectScrollbarOptions): ModuleWithProviders {
    return {
      ngModule: PerfectScrollbarModule,
      providers: [
        {
          provide: PERFECT_SCROLLBAR_GUARD,
          useFactory: provideForRootGuard,
          deps: [
            [
              PerfectScrollbarOptions,
              new Optional(),
              new SkipSelf()
            ]
          ]
        },
        {
          provide: PERFECT_SCROLLBAR_CONFIG,
          useValue: config ? config : {}
        },
        {
          provide: PerfectScrollbarOptions,
          useFactory: provideDefaultConfig,
          deps: [
            PERFECT_SCROLLBAR_CONFIG
          ]
        }
      ]
    };
  }

  static forChild(): ModuleWithProviders {
    return {
      ngModule: PerfectScrollbarModule
    };
  }

  constructor( @Optional() @Inject(PERFECT_SCROLLBAR_GUARD) guard: any) { }
}

export function provideForRootGuard(config: PerfectScrollbarOptions): any {
  if (config) {
    throw new Error(`
      Application called PerfectScrollbarModule.forRoot() twice.
      For submodules use PerfectScrollbarModule.forChild() instead.
    `);
  }

  return 'guarded';
}

export function provideDefaultConfig(config: IPerfectScrollbarOptions): PerfectScrollbarOptions {
  return new PerfectScrollbarOptions(config);
}
