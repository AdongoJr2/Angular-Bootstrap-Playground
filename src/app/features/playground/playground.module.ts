import { NgModule } from '@angular/core';

import { PlaygroundRoutingModule } from './playground-routing.module';
import { PlaygroundComponent } from './playground.component';
import { SharedModule } from '@app/shared';
import {
  FormRatingComponent
} from './components';


@NgModule({
  declarations: [
    PlaygroundComponent,
    FormRatingComponent
  ],
  imports: [
    SharedModule,
    PlaygroundRoutingModule
  ]
})
export class PlaygroundModule { }
