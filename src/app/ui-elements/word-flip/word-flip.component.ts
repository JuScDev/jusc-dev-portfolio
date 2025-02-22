import { Component, HostBinding, input } from '@angular/core';

@Component({
  selector: 'app-word-flip',
  imports: [],
  templateUrl: './word-flip.component.html',
  styleUrl: './word-flip.component.scss',
})
export class WordFlipComponent {
  public firstString = input.required<string>();

  public changingWords = input.required<Array<string>>();

  public lastString = input.required<string>();

  public get reversedChangingWords(): Array<string> {
    return this.changingWords().slice().reverse();
  }

  @HostBinding('class.four-words')
  public get fourWords(): boolean {
    return this.changingWords().length === 4;
  }

  @HostBinding('class.five-words')
  public get fiveWords(): boolean {
    return this.changingWords().length === 5;
  }
}
