import { Component, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { SidenavComponent } from '../sidenav/sidenav.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  readonly faBars = faBars;

  constructor(
    private offcanvasService: NgbOffcanvas
  ) { }

  ngOnInit(): void {
    const navBar: HTMLElement | null = document.querySelector(".navbar");

    // console.log(navBar);

    if (navBar) {
      window.onscroll = () => {
        if (window.scrollY > 16) {
          navBar.classList.add('navbar-active');
        } else {
          navBar.classList.remove('navbar-active');
        }
      };
    }
  }

  open() {
    this.offcanvasService.open(SidenavComponent);
  }

}
