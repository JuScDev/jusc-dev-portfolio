import { Directive, ElementRef, input } from '@angular/core';

@Directive({
  selector: '[appTypewriterEffect]',
})
export class TypewriterEffectDirective {
  public text = input.required<string>();

  public speed = input(100);

  public constructor(private el: ElementRef) {}

  ngOnInit() {
    this.typeText();
  }

  private async typeText() {
    const element = this.el.nativeElement;
    element.textContent = ''; // Start mit leerem Text

    for (let i = 0; i < this.text().length; i++) {
      element.textContent += this.text()[i];
      await this.sleep(this.speed());
    }
  }

  private sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
