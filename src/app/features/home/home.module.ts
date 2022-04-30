import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HomePageComponent } from './pages';
import { SharedModule } from '../../shared/shared.module';
import {
  HeroComponent
} from './components';


@NgModule({
  declarations: [
    HomeComponent,
    HomePageComponent,
    HeroComponent
  ],
  imports: [
    SharedModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
