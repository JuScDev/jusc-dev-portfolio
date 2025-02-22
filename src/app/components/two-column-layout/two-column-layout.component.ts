import { Component, HostBinding, input } from '@angular/core';
@Component({
  selector: 'app-two-column-layout',
  imports: [],
  templateUrl: './two-column-layout.component.html',
  styleUrl: './two-column-layout.component.scss',
})
export class TwoColumnLayoutComponent {
  public imageSrc = input.required<string>();

  public imageAlt = input.required<string>();

  public imageRight = input<boolean>(true);

  @HostBinding('class.switch-image-side')
  public get switchImagesSide(): boolean {
    return !this.imageRight();
  }
}
