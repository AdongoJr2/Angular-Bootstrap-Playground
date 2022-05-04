import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import {
  HeaderComponent
} from './components';
import { SharedModule } from '@app/shared/shared.module';


@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent
  ],
  imports: [
    SharedModule,
    LayoutRoutingModule
  ]
})
export class LayoutModule { }
