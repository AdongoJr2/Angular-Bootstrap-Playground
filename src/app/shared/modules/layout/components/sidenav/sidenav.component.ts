import { Component, OnInit } from '@angular/core';
import { NgbActiveOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import {
  faHome,
  faPeopleGroup,
  faHandHoldingDollar,
  faBlog,
  faBookOpenReader,
  faAddressBook
} from '@fortawesome/free-solid-svg-icons';
// import {
//   faAddressBook
// } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  readonly faHome = faHome;
  readonly faPeopleGroup = faPeopleGroup;
  readonly faHandHoldingDollar = faHandHoldingDollar;
  readonly faBlog = faBlog;
  readonly faBookOpenReader = faBookOpenReader;
  readonly faAddressBook = faAddressBook;

  constructor(
    private activeOffcanvas: NgbActiveOffcanvas
  ) { }

  ngOnInit(): void {
  }

  close(reason: string): void {
    this.activeOffcanvas.close(reason);
  }

}
