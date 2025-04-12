import { Component, HostListener, inject, signal } from '@angular/core';
import { ThemeToggleComponent } from '../../ui-elements/theme-toggle/theme-toggle.component';
import { TwoColumnLayoutComponent } from '../../components/two-column-layout/two-column-layout.component';
import { ButtonComponent } from '../../ui-elements/button/button.component';
import { WordFlipComponent } from '../../ui-elements/word-flip/word-flip.component';
import { MagicCodeSnippetComponent } from '../../components/magic-code-snippet/magic-code-snippet.component';
import { TypewriterEffectDirective } from '../../directives/typewriter-effect.directive';
import { DataService } from '../../data.service';
import { IconBoxPopoverComponent } from '../../ui-elements/icon-box-popover/icon-box-popover.component';
import { SkillBubbleComponent } from '../../components/skill-bubble/skill-bubble.component';
import { ScrollArrowsComponent } from '../../ui-elements/scroll-arrows/scroll-arrows.component';
import { FooterComponent } from '../../components/footer/footer.component';

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
    ScrollArrowsComponent,
    FooterComponent,
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
