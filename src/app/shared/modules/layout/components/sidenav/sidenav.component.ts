import { Component, OnInit } from '@angular/core';
import { NgbActiveOffcanvas } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  constructor(
    private activeOffcanvas: NgbActiveOffcanvas
  ) { }

  ngOnInit(): void {
  }

  close(reason: string): void {
    this.activeOffcanvas.close(reason);
  }

}
