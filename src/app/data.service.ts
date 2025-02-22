import { inject, Injectable, signal } from '@angular/core';
import { PersistenceService } from './persistence.service';
import { Theme } from './ui-elements/theme-toggle/theme-toggle.component';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private _persistenceService = inject(PersistenceService);

  public theme = signal<Theme>('light');

  public init(): void {
    this.theme.set(this._persistenceService.getTheme());
    this._setThemeToDocument();
  }

  public toggleTheme() {
    this.theme.set(this.theme() === 'light' ? 'dark' : 'light');
    this._setThemeToDocument();
    this._persistenceService.setTheme(this.theme());
  }

  private _setThemeToDocument(): void {
    document.documentElement.setAttribute('data-theme', this.theme());
  }
}
