import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumsRoutingModule } from './albums-routing.module';
import { AlbumsComponent } from './albums.component';
import { HoverDinamicColorDirective } from '../../share/directives/hover-dinamic-color.directive';


@NgModule({
  declarations: [
    AlbumsComponent,
  ],
  imports: [
    CommonModule,
    AlbumsRoutingModule,
    HoverDinamicColorDirective
  ]
})
export class AlbumsModule { }
