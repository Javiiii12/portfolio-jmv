import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../core/language.service';

@Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [CommonModule],
    template: `
    <nav class="fixed top-0 right-0 z-50 py-4 px-6 md:px-10 flex justify-end">
        <!-- Language Toggle -->
        <button (click)="langService.toggleLanguage()"
                class="px-3 py-1 text-sm font-bold font-mono tracking-widest border border-slate-700
                       hover:border-cyan-400 hover:text-cyan-400 text-slate-300 bg-black/50 backdrop-blur-sm
                       transition-colors uppercase">
            [ {{ langService.currentLang() }} ]
        </button>
    </nav>
  `
})
export class NavbarComponent {
    public langService = inject(LanguageService);
}
