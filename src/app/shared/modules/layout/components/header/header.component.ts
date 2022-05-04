import { Component, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  readonly faBars = faBars;

  constructor() { }

  ngOnInit(): void {
    const navBar: HTMLElement | null = document.querySelector(".navbar");

    console.log(navBar);

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

}
