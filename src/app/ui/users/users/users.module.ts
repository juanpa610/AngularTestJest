import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { WebsitePipe } from '../../../share/pipes/website.pipe';
import { NumbersOnlyDirective } from '../../../share/directives/numbers-only.directive';


@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    NumbersOnlyDirective,
    WebsitePipe
  ]
})
export class UsersModule { }
