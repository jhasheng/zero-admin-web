import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpansionListHeaderComponent } from './expansion-list/expansion-list-header.component';
import { ExpansionListComponent } from './expansion-list/expansion-list.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [ExpansionListHeaderComponent, ExpansionListComponent],
    exports: [ExpansionListHeaderComponent, ExpansionListComponent]
})
export class ZeroModule { }
