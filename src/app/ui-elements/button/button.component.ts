import { Component, HostBinding, input } from '@angular/core';

type ButtonVariant = 'primary' | 'secondary';
type ButtonType = 'button' | 'submit' | 'reset';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  public text = input.required<string>();

  public variant = input<ButtonVariant>('primary');

  public buttonType = input<ButtonType>('button');

  @HostBinding('class.secondary')
  public get isSecondary() {
    return this.variant() === 'secondary';
  }
}
