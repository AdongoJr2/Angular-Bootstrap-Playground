import { Component, OnInit } from '@angular/core';
import { NgbActiveOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import {
  faHome,
  faPeopleGroup,
  faHandHoldingDollar,
  faBlog,
  faBookOpenReader,
  faAddressBook,
  faMinus,
  faAngleDown,
  faAngleUp,
  faCode
} from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
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
  readonly faMinus = faMinus;
  readonly faAngleDown = faAngleDown;
  readonly faAngleUp = faAngleUp;
  readonly faCode = faCode;

  isCollapsed = true;

  constructor(
    private router: Router,
    private activeOffcanvas: NgbActiveOffcanvas
  ) { }

  ngOnInit(): void {
  }

  close(reason: string): void {
    this.activeOffcanvas.close(reason);
  }

  navigate(path: string, closeReason?: string): void {
    this.close(closeReason ?? '');
    this.router.navigate([path]);
  }

}
