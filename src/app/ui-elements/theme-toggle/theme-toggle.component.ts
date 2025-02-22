import { Component, inject } from '@angular/core';
import { DataService } from '../../data.service';

export type Theme = 'light' | 'dark';

@Component({
  selector: 'app-theme-toggle',
  imports: [],
  templateUrl: './theme-toggle.component.html',
  styleUrl: './theme-toggle.component.scss',
})
export class ThemeToggleComponent {
  public dataService = inject(DataService);
}
