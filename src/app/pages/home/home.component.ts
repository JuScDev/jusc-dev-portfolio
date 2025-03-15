import { Component, HostListener, inject, signal } from '@angular/core';
import { ThemeToggleComponent } from '../../ui-elements/theme-toggle/theme-toggle.component';
import { TwoColumnLayoutComponent } from '../../components/two-column-layout/two-column-layout.component';
import { ButtonComponent } from '../../ui-elements/button/button.component';
import { WordFlipComponent } from '../../ui-elements/word-flip/word-flip.component';
import { MagicCodeSnippetComponent } from '../../ui-elements/magic-code-snippet/magic-code-snippet.component';
import { TypewriterEffectDirective } from '../../directives/typewriter-effect.directive';
import { DataService } from '../../data.service';
import { IconBoxPopoverComponent } from '../../ui-elements/icon-box-popover/icon-box-popover.component';
import { SkillBubbleComponent } from '../../ui-elements/skill-bubble/skill-bubble.component';

@Component({
  selector: 'app-home',
  imports: [
    TwoColumnLayoutComponent,
    ThemeToggleComponent,
    ButtonComponent,
    WordFlipComponent,
    TypewriterEffectDirective,
    MagicCodeSnippetComponent,
    IconBoxPopoverComponent,
    SkillBubbleComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  public dataService = inject(DataService);

  public triggerCodeExample = signal(false);

  @HostListener('document:visibilitychange', ['$event'])
  public visibilitychange() {
    if (!document.hidden) {
      this.triggerCodeExample.set(true);
      setTimeout(() => {
        this.triggerCodeExample.set(false);
      }, 50);
    }
  }
}
