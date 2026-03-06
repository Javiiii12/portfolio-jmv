import { Injectable, signal, effect } from '@angular/core';

export type Theme = 'dark' | 'light';

@Injectable({
    providedIn: 'root'
})
export class ThemeService {
    currentTheme = signal<Theme>('dark');

    constructor() {
        effect(() => {
            if (this.currentTheme() === 'light') {
                document.body.classList.add('light');
                document.body.classList.remove('dark');
            } else {
                document.body.classList.add('dark');
                document.body.classList.remove('light');
            }
        });
    }

    toggleTheme() {
        this.currentTheme.update(theme => theme === 'dark' ? 'light' : 'dark');
    }
}
