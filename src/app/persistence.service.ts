import { Injectable } from '@angular/core';
import { Theme } from './ui-elements/theme-toggle/theme-toggle.component';

@Injectable({
  providedIn: 'root',
})
export class PersistenceService {
  public setTheme(theme: string): void {
    localStorage.setItem('theme', theme);
  }

  public getTheme(): Theme {
    return (localStorage.getItem('theme') as Theme) ?? 'light';
  }
}
