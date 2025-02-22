import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PersistenceService {
  public setTheme(theme: string): void {
    localStorage.setItem('theme', theme);
  }

  public getTheme(): string | null {
    return localStorage.getItem('theme');
  }
}
