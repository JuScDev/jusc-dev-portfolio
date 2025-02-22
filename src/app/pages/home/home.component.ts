import { Component } from '@angular/core';
import { ThemeToggleComponent } from '../../ui-elements/theme-toggle/theme-toggle.component';
import { TwoColumnLayoutComponent } from '../../components/two-column-layout/two-column-layout.component';
import { ButtonComponent } from '../../ui-elements/button/button.component';
import { WordFlipComponent } from '../../ui-elements/word-flip/word-flip.component';
import { MagicCodeSnippetComponent } from '../../ui-elements/magic-code-snippet/magic-code-snippet.component';
import { TypewriterEffectDirective } from '../../directives/typewriter-effect.directive';

@Component({
  selector: 'app-home',
  imports: [
    TwoColumnLayoutComponent,
    ThemeToggleComponent,
    ButtonComponent,
    WordFlipComponent,
    TypewriterEffectDirective,
    MagicCodeSnippetComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
