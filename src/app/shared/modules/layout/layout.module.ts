import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import {
  HeaderComponent,
  SidenavComponent
} from './components';


@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    SidenavComponent
  ],
  imports: [
    SharedModule,
    LayoutRoutingModule
  ]
})
export class LayoutModule { }
