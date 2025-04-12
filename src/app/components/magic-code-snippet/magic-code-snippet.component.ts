import {
  AfterViewInit,
  Component,
  effect,
  ElementRef,
  HostBinding,
  inject,
  signal,
  ViewChild,
} from '@angular/core';
import { DataService } from '../../data.service';
import { TypewriterEffectDirective } from '../../directives/typewriter-effect.directive';
import { Theme } from '../../ui-elements/theme-toggle/theme-toggle.component';

@Component({
  selector: 'app-magic-code-snippet',
  imports: [TypewriterEffectDirective],
  templateUrl: './magic-code-snippet.component.html',
  styleUrl: './magic-code-snippet.component.scss',
})
export class MagicCodeSnippetComponent implements AfterViewInit {
  @ViewChild('secondLine')
  public secondLineEl!: ElementRef<HTMLSpanElement>;

  @ViewChild('fourthLine')
  public fourthLineEl!: ElementRef<HTMLSpanElement>;

  @ViewChild('fifthLine')
  public fifthLineEl!: ElementRef<HTMLSpanElement>;

  @ViewChild('sixthLine')
  public sixthLineEl!: ElementRef<HTMLSpanElement>;

  @ViewChild('seventhLine')
  public seventhLineEl!: ElementRef<HTMLSpanElement>;

  @ViewChild('eighthLine')
  public eighthLineEl!: ElementRef<HTMLSpanElement>;

  @ViewChild('ninthLine')
  public ninthLineEl!: ElementRef<HTMLSpanElement>;

  @ViewChild('tenthLine')
  public tenthLineEl!: ElementRef<HTMLSpanElement>;

  @ViewChild('twelfthLine')
  public twelfthLineEl!: ElementRef<HTMLSpanElement>;

  @ViewChild('thirteenthLine')
  public thirteenthLineEl!: ElementRef<HTMLSpanElement>;

  @ViewChild('fourteenthLine')
  public fourteenthLineEl!: ElementRef<HTMLSpanElement>;

  @ViewChild('fifteenthLine')
  public fifteenthLineEl!: ElementRef<HTMLSpanElement>;

  @ViewChild('sixteenthLine')
  public sixteenthLineEl!: ElementRef<HTMLSpanElement>;

  @ViewChild('seventeenthLine')
  public seventeenthLineEl!: ElementRef<HTMLSpanElement>;

  public ngAfterViewInit(): void {
    this.restartAnimation();
    setInterval(() => {
      this.restartAnimation();
    }, 30000);

    this.editAllLines(this._dataService.theme());
  }

  private editAllLines(theme: Theme): void {
    this._editLine(this.secondLineEl, theme);
    this._editLine(this.fourthLineEl, theme);
    this._editLine(this.fifthLineEl, theme);
    this._editLine(this.sixthLineEl, theme);
    this._editLine(this.seventhLineEl, theme);
    this._editLine(this.eighthLineEl, theme);
    this._editLine(this.ninthLineEl, theme);
    this._editLine(this.tenthLineEl, theme);
    this._editLine(this.twelfthLineEl, theme);
    this._editLine(this.thirteenthLineEl, theme);
    this._editLine(this.fourteenthLineEl, theme);
    this._editLine(this.fifteenthLineEl, theme);
    this._editLine(this.sixteenthLineEl, theme);
    this._editLine(this.seventeenthLineEl, theme);
  }

  private _dataService = inject(DataService);

  public showAnimatedText = signal(false);

  public showFirstElements = signal(false);

  public showSecondElements = signal(false);

  public showSecondStepAnimation = signal(false);

  public showLastElements = signal(false);

  public showLastAnimation = signal(false);

  @HostBinding('class.show-second-step')
  public get showSecondStep(): boolean {
    return this.showSecondStepAnimation();
  }

  @HostBinding('class.show-last-step')
  public get showLastStep(): boolean {
    return this.showLastAnimation();
  }

  public restartAnimation(): void {
    this.showAnimatedText.set(false);
    this.showFirstElements.set(false);
    this.showSecondElements.set(false);
    this.showSecondStepAnimation.set(false);
    this.showLastElements.set(false);
    this.showLastAnimation.set(false);

    setTimeout(() => {
      this.showFirstElements.set(true);
    }, 0);

    setTimeout(() => {
      this.showAnimatedText.set(true);
      this.secondLineEl.nativeElement.innerHTML = this.secondLineContent;
      this._editLine(this.secondLineEl, this._dataService.theme());
    }, 5300);

    setTimeout(() => {
      this.showSecondElements.set(true);
    }, 7300);

    setTimeout(() => {
      this.fourthLineEl.nativeElement.innerHTML = this.fourthLineContent;
      this._editLine(this.fourthLineEl, this._dataService.theme());
      this.fifthLineEl.nativeElement.innerHTML = this.fifthLineContent;
      this._editLine(this.fifthLineEl, this._dataService.theme());
      this.sixthLineEl.nativeElement.innerHTML = this.sixthLineContent;
      this._editLine(this.sixthLineEl, this._dataService.theme());
      this.seventhLineEl.nativeElement.innerHTML = this.seventhLineContent;
      this._editLine(this.seventhLineEl, this._dataService.theme());
      this.eighthLineEl.nativeElement.innerHTML = this.eighthLineContent;
      this._editLine(this.eighthLineEl, this._dataService.theme());
      this.tenthLineEl.nativeElement.innerHTML = this.tenthLineContent;
      this._editLine(this.tenthLineEl, this._dataService.theme());
      this.seventeenthLineEl.nativeElement.innerHTML =
        this.seventeenthLineContent;
      this._editLine(this.seventeenthLineEl, this._dataService.theme());
      this.showSecondStepAnimation.set(true);
    }, 10400);

    setTimeout(() => {
      this.showLastElements.set(true);
    }, 12500);

    setTimeout(() => {
      this.ninthLineEl.nativeElement.innerHTML = this.ninthLineContent;
      this._editLine(this.ninthLineEl, this._dataService.theme());
      this.twelfthLineEl.nativeElement.innerHTML = this.twelfthLineContent;
      this._editLine(this.twelfthLineEl, this._dataService.theme());
      this.thirteenthLineEl.nativeElement.innerHTML =
        this.thirteenthLineContent;
      this._editLine(this.thirteenthLineEl, this._dataService.theme());
      this.fourteenthLineEl.nativeElement.innerHTML =
        this.fourteenthLineContent;
      this._editLine(this.fourteenthLineEl, this._dataService.theme());
      this.fifteenthLineEl.nativeElement.innerHTML = this.fifteenthLineContent;
      this._editLine(this.fifteenthLineEl, this._dataService.theme());
      this.sixteenthLineEl.nativeElement.innerHTML = this.sixteenthLineContent;
      this._editLine(this.sixteenthLineEl, this._dataService.theme());
      this.showLastAnimation.set(true);
    }, 16500);

    setTimeout(() => {
      this.resetContent();
    }, 29999);
  }

  private resetContent(): void {
    this.secondLineEl.nativeElement.innerHTML = '';
    this.fourthLineEl.nativeElement.innerHTML = '';
    this.fifthLineEl.nativeElement.innerHTML = '';
    this.sixthLineEl.nativeElement.innerHTML = '';
    this.seventhLineEl.nativeElement.innerHTML = '';
    this.eighthLineEl.nativeElement.innerHTML = '';
    this.tenthLineEl.nativeElement.innerHTML = '';
    this.ninthLineEl.nativeElement.innerHTML = '';
    this.twelfthLineEl.nativeElement.innerHTML = '';
    this.thirteenthLineEl.nativeElement.innerHTML = '';
    this.fourteenthLineEl.nativeElement.innerHTML = '';
    this.fifteenthLineEl.nativeElement.innerHTML = '';
    this.sixteenthLineEl.nativeElement.innerHTML = '';
    this.seventeenthLineEl.nativeElement.innerHTML = '';
  }

  constructor() {
    effect(() => {
      const theme = this._dataService.theme();
      this.editAllLines(theme);
    });
  }

  private _editLine(lineEl: ElementRef<HTMLSpanElement>, theme: Theme): void {
    if (!lineEl) {
      return;
    }

    const htmlTags = lineEl.nativeElement.querySelectorAll('.dark-blue');
    htmlTags.forEach((htmlTag) => {
      (htmlTag as HTMLSpanElement).style.color =
        theme === 'light' ? '#800000' : '#569cd6';
    });

    const lightBlue = lineEl.nativeElement.querySelectorAll('.light-blue');
    lightBlue.forEach((classEl) => {
      (classEl as HTMLSpanElement).style.color =
        theme === 'light' ? '#e50101' : '#9ddcfd';
    });

    const yellowItems = lineEl.nativeElement.querySelectorAll('.yellow');
    yellowItems.forEach((el) => {
      (el as HTMLSpanElement).style.color =
        theme === 'light' ? '#800000' : '#d7ba7d';
    });

    const brownItems = lineEl.nativeElement.querySelectorAll('.brown');
    brownItems.forEach((el) => {
      (el as HTMLSpanElement).style.color =
        theme === 'light' ? '#0551a5' : '#ce9178';
    });

    const greenItems = lineEl.nativeElement.querySelectorAll('.green');
    greenItems.forEach((el) => {
      (el as HTMLSpanElement).style.color =
        theme === 'light' ? '#b5cea8' : '#b5cea8';
    });

    const purpleItems = lineEl.nativeElement.querySelectorAll('.purple');
    purpleItems.forEach((el) => {
      (el as HTMLSpanElement).style.color =
        theme === 'light' ? '#af01db' : '#c485bf';
    });
  }

  public secondLineContent = `
    <<span class="dark-blue">p</span>>I <<span class="dark-blue">span</span> <span class="light-blue">class</span>="heart">❤️&lt;/<span class="dark-blue">span</span>> Coding &lt;/<span class="dark-blue">p</span>>
  `;

  public secondLineTypeable = `
   <p>I <span class="heart">❤️</span> Coding </p>
  `;

  public fourthLineContent = `
    <<span class="dark-blue">style</span>>
  `;

  public fourthLineTypeable = `
    <style>
  `;

  public fifthLineContent = `
    &emsp;.<span class="yellow">heart</span> {
  `;

  public fifthLineTypeable = `
    .heart {
  `;

  public sixthLineContent = `
    &emsp;&emsp;<span class="light-blue">display:</span> <span class="brown">inline-block</span>;
  `;

  public sixthLineTypeable = `
    display: inline-block;
  `;

  public seventhLineContent = `
    &emsp;&emsp;<span class="light-blue">vertical-align:</span> <span class="brown">middle</span>;
  `;

  public seventhLineTypeable = `
  vertical-align: middle;
`;

  public eighthLineContent = `
    &emsp;&emsp;<span class="light-blue">font-size:</span> <span class="green">40px</span>;
  `;

  public eighthLineTypeable = `
    font-size: 40px;
  `;

  public ninthLineContent = `
    &emsp;&emsp;<span class="light-blue">animation:</span> <span class="green">1.5s</span> <span class="brown">infinite</span> pulse;
  `;

  public ninthLineTypeable = `
    animation: 1.5s infinite pulse;
  `;

  public tenthLineContent = `
    &emsp;}
  `;

  public tenthLineTypeable = `
    }
  `;

  public twelfthLineContent = `
    &emsp;<span class="purple">@keyframes</span> <span class="dark-blue">pulse {</span>
  `;

  public twelfthLineTypeable = `
    @keyframes pulse {
  `;

  public thirteenthLineContent = `
    &emsp;&emsp;<span class="yellow">0% {</span> <span class="light-blue">transform</span>: <span class="green">scale</span><span class="purple">(</span><span class="green">1</span><span class="purple">)</span>; <span class="yellow">}</span>
  `;

  public thirteenthLineTypeable = `
    0% { transform: scale(1); }
  `;

  public fourteenthLineContent = `
   &emsp;&emsp;<span class="yellow">50% {</span> <span class="light-blue">transform</span>: <span class="green">scale</span><span class="purple">(</span><span class="green">1.5</span><span class="purple">)</span>; <span class="yellow">}</span>
  `;

  public fourteenthLineTypeable = `
   50% { transform: scale(1.5); }
  `;

  public fifteenthLineContent = `
   &emsp;&emsp;<span class="yellow">100% {</span> <span class="light-blue">transform</span>: <span class="green">scale</span><span class="purple">(</span><span class="green">1</span><span class="purple">)</span>; <span class="yellow">}</span>
  `;

  public fifteenthLineTypeable = `
   100% { transform: scale(1)>; }
  `;

  public sixteenthLineContent = `
    &emsp;<span class="dark-blue">}</span>
  `;

  public sixteenthLineTypeable = `
    }
  `;

  public seventeenthLineContent = `
    &lt;/<span class="dark-blue">style</span>>
  `;

  public seventeenthLineTypeable = `
    </style>
  `;
}
