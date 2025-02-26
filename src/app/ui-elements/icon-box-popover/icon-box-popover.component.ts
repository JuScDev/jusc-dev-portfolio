import { Component, HostBinding, input, output, signal } from '@angular/core';

@Component({
  selector: 'app-icon-box-popover',
  imports: [],
  templateUrl: './icon-box-popover.component.html',
  styleUrl: './icon-box-popover.component.scss',
})
export class IconBoxPopoverComponent {
  public icon = input.required<string>();

  public label = input.required<string>();

  public popupContentShown = signal(false);

  @HostBinding('class.popup-content-shown')
  public get popupContentShownClass() {
    return this.popupContentShown();
  }
}
