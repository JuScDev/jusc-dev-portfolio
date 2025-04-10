import { Component } from '@angular/core';

@Component({
  selector: 'app-scroll-arrows',
  imports: [],
  templateUrl: './scroll-arrows.component.html',
  styleUrl: './scroll-arrows.component.scss',
})
export class ScrollArrowsComponent {
  public scrollUp() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  public scrollDown() {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
  }
}
