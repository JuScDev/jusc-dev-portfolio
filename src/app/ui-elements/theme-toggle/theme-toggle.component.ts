import { Component, effect, signal } from '@angular/core';
import { PersistenceService } from '../../persistence.service';

type Theme = 'light' | 'dark';

@Component({
  selector: 'app-theme-toggle',
  imports: [],
  templateUrl: './theme-toggle.component.html',
  styleUrl: './theme-toggle.component.scss',
})
export class ThemeToggleComponent {
  public constructor(private readonly _persistenceService: PersistenceService) {
    const theme = this._persistenceService.getTheme() as Theme;
    if (theme) {
      this.theme.set(theme);
    }

    effect(() => {
      document.documentElement.setAttribute('data-theme', this.theme());
      this._persistenceService.setTheme(this.theme());
    });
  }

  public theme = signal<Theme>('light');

  public toggleTheme() {
    this.theme.set(this.theme() === 'light' ? 'dark' : 'light');
  }
}
