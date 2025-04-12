import { Component, output } from '@angular/core';

@Component({
  selector: 'app-scroll-arrows',
  imports: [],
  templateUrl: './scroll-arrows.component.html',
  styleUrl: './scroll-arrows.component.scss',
})
export class ScrollArrowsComponent {
  public scrollUp = output<void>();

  public scrollDown = output<void>();
}
