import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { DurationPipe } from "./pipes";

const declarationsForExport = [
  DurationPipe,
];

@NgModule({
  declarations: [
    ...declarationsForExport,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    FontAwesomeModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    FontAwesomeModule,
    ...declarationsForExport
  ]
})
export class SharedModule { }
