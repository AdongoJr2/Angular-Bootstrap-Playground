import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss']
})
export class PlaygroundComponent implements OnInit {

  ngOnInit(): void {
    const element = <HTMLElement>document.querySelector('.elem');

    // console.log("Element =>", element);

    // if (element) {
    //   this.isInViewport();
    // }
  }

  isInViewport() {
    const element = <HTMLElement>document.querySelector('.elem');

    const rect = element.getBoundingClientRect(); // provides the element’s position and its relative position to the viewport

    console.log(rect);

    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

}
