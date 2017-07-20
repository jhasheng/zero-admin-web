import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserManageRoutingModule } from './user-manage-routing.module';
import { UsersComponent } from './users/users.component';
import { RolesComponent } from './roles/roles.component';
import { OrganizationUnitsComponent } from './organization-units/organization-units.component';

@NgModule({
  imports: [
    CommonModule,
    UserManageRoutingModule
  ],
  declarations: [UsersComponent, RolesComponent, OrganizationUnitsComponent]
})
export class UserManageModule { }
