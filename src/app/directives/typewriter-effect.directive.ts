import { Directive, ElementRef, input } from '@angular/core';

@Directive({
  selector: '[appTypewriterEffect]',
})
export class TypewriterEffectDirective {
  public text = input.required<string>();

  public speed = input(100);

  public reserveSpace = input(false);

  public constructor(private el: ElementRef) {}

  ngOnInit() {
    if (this.reserveSpace()) {
      this._reserveSpace();
    }
    this.typeText();
  }

  private _reserveSpace() {
    const element = this.el.nativeElement;
    element.style.height = `${this.getTextHeight()}px`;
  }

  private getTextHeight(): number {
    const element = this.el.nativeElement;
    const clone = element.cloneNode(true) as HTMLElement;
    clone.style.visibility = 'hidden';
    clone.textContent = this.text();
    this.el.nativeElement.parentElement.appendChild(clone);
    const height = clone.offsetHeight;
    this.el.nativeElement.parentElement.removeChild(clone);

    return height;
  }

  private async typeText() {
    const element = this.el.nativeElement;
    element.textContent = '';

    for (let i = 0; i < this.text().length; i++) {
      element.textContent += this.text()[i];
      await this.sleep(this.speed());

      if (i === this.text().length - 1) {
        element.style.height = '';
      }
    }
  }

  private sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
