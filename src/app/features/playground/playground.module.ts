import { NgModule } from '@angular/core';

import { PlaygroundRoutingModule } from './playground-routing.module';
import { PlaygroundComponent } from './playground.component';
import { SharedModule } from '@app/shared';


@NgModule({
  declarations: [
    PlaygroundComponent
  ],
  imports: [
    SharedModule,
    PlaygroundRoutingModule
  ]
})
export class PlaygroundModule { }
