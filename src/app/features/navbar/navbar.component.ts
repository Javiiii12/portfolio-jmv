import { Component, HostListener, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { LanguageService } from '../../core/language.service';
import { ThemeService } from '../../core/theme.service';

interface NavItem { label: string; id: string; }

@Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [CommonModule, RouterModule],
    template: `
    <div class="fixed top-0 left-0 right-0 z-50">
        <!-- Barra de progreso de scroll -->
        <div class="h-0.5 w-full bg-transparent">
            <div class="h-full bg-gradient-to-r from-cyan-400 via-sky-400 to-emerald-400 origin-left transition-[transform] duration-150 ease-out shadow-[0_0_8px_rgba(34,211,238,0.7)]"
                 [style.transform]="'scaleX(' + (progress() / 100) + ')'"></div>
        </div>

        <nav class="px-4 md:px-8 py-3 flex items-center gap-3 backdrop-blur-md transition-all duration-300"
             [ngClass]="scrolled() ? 'bg-black/50 border-b border-cyan-500/20 shadow-[0_6px_24px_rgba(34,211,238,0.10)]' : 'border-b border-transparent'">

            <!-- Marca / Logo -->
            <button (click)="goToSection(topItem)" aria-label="Inicio"
                    class="group flex items-center gap-2 shrink-0">
                <span class="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <svg viewBox="0 0 64 64" width="30" height="30" aria-hidden="true" class="drop-shadow-[0_0_8px_rgba(34,211,238,0.45)]">
                        <defs>
                            <linearGradient id="navMvGrad" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
                                <stop offset="0" stop-color="#22d3ee"/>
                                <stop offset="0.55" stop-color="#38bdf8"/>
                                <stop offset="1" stop-color="#4ade80"/>
                            </linearGradient>
                        </defs>
                        <rect x="1.5" y="1.5" width="61" height="61" rx="14" fill="#020617"/>
                        <rect x="1.5" y="1.5" width="61" height="61" rx="14" fill="none" stroke="url(#navMvGrad)" stroke-width="3"/>
                        <g fill="none" stroke="url(#navMvGrad)" stroke-width="5.5" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M10 44 L10 20 L19.5 32.5 L29 20 L29 44"/>
                            <path d="M35 20 L44.5 44 L54 20"/>
                        </g>
                    </svg>
                </span>
                <span class="hidden sm:block font-bold tracking-[0.2em] text-slate-200 group-hover:text-cyan-400 transition-colors">
                    JMV<span class="text-cyan-400 animate-pulse">_</span>
                </span>
            </button>

            <!-- Navegación por secciones (Desktop) -->
            <div class="hidden md:flex items-center gap-1 ml-4 font-mono text-xs tracking-widest uppercase">
                @for (item of navItems; track item.id; let i = $index) {
                <button (click)="goToSection(item)"
                        class="relative px-3 py-2 group transition-colors"
                        [class.text-cyan-400]="isActive(item)"
                        [class.text-slate-400]="!isActive(item)"
                        [class.hover:text-slate-200]="!isActive(item)">
                    <span class="text-slate-600 group-hover:text-cyan-500/70 transition-colors mr-1.5">{{ pad(i) }}</span>{{ langService.translateUI(item.label) }}
                    <span class="absolute left-2 right-2 -bottom-0.5 h-px bg-gradient-to-r from-cyan-400 to-emerald-400 origin-left transition-transform duration-300 scale-x-0 group-hover:scale-x-100"
                          [class.scale-x-100]="isActive(item)"
                          [class.scale-x-0]="!isActive(item)"></span>
                </button>
                }
            </div>

            <div class="flex-1"></div>

            <!-- Controles -->
            <div class="flex items-center gap-1.5 md:gap-2.5">
                <a href="https://github.com/Javiiii12" target="_blank" rel="noopener noreferrer" aria-label="GitHub"
                   class="p-1.5 text-slate-400 hover:text-cyan-400 hover:drop-shadow-[0_0_6px_rgba(34,211,238,0.8)] transition-all">
                    <svg viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>
                </a>
                <a href="https://www.linkedin.com/in/javier-martinez-valiente" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                   class="p-1.5 text-slate-400 hover:text-cyan-400 hover:drop-shadow-[0_0_6px_rgba(34,211,238,0.8)] transition-all">
                    <svg viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>

                <span class="w-px h-5 bg-slate-700/70 mx-0.5"></span>

                <button (click)="themeService.toggleTheme()"
                        class="px-2.5 py-1 text-xs font-bold font-mono tracking-widest border border-slate-700
                               hover:border-cyan-400 hover:text-cyan-400 text-slate-300 bg-black/50 backdrop-blur-sm
                               transition-colors uppercase">
                    [ {{ themeService.currentTheme() === 'dark' ? 'LIGHT' : 'DARK' }} ]
                </button>
                <button (click)="langService.toggleLanguage()"
                        class="px-2.5 py-1 text-xs font-bold font-mono tracking-widest border border-slate-700
                               hover:border-cyan-400 hover:text-cyan-400 text-slate-300 bg-black/50 backdrop-blur-sm
                               transition-colors uppercase">
                    [ {{ langService.currentLang() }} ]
                </button>

                <!-- Hamburguesa móvil -->
                <button (click)="menuOpen.set(!menuOpen())" aria-label="Abrir menú de navegación"
                        [attr.aria-expanded]="menuOpen()"
                        class="md:hidden px-2.5 py-1 text-xs font-bold font-mono tracking-widest border border-slate-700
                               hover:border-cyan-400 hover:text-cyan-400 text-slate-300 bg-black/50 backdrop-blur-sm transition-colors">
                    {{ menuOpen() ? '[ X ]' : '[ ≡ ]' }}
                </button>
            </div>
        </nav>

        <!-- Panel de navegación móvil (desplegable animado) -->
        <div class="md:hidden overflow-hidden transition-all duration-300 ease-out bg-black/95 backdrop-blur-md border-b border-cyan-500/20 origin-top"
             [class.max-h-0]="!menuOpen()" [class.max-h-[420px]]="menuOpen()"
             [class.opacity-0]="!menuOpen()" [class.opacity-100]="menuOpen()">
            <div class="flex flex-col px-6 py-3 font-mono text-sm tracking-widest uppercase text-slate-300">
                @for (item of navItems; track item.id; let i = $index) {
                <button (click)="goToSection(item)"
                        class="flex items-center py-3 border-b border-slate-800/60 last:border-b-0 hover:text-cyan-400 transition-colors text-left"
                        [class.text-cyan-400]="isActive(item)">
                    <span class="text-cyan-500 mr-3">{{ pad(i) }}</span>
                    <span class="mr-2 text-slate-600 group-hover:text-cyan-500">></span>{{ langService.translateUI(item.label) }}
                </button>
                }
            </div>
        </div>
    </div>
  `
})
export class NavbarComponent implements OnInit {
    public langService = inject(LanguageService);
    public themeService = inject(ThemeService);
    private router = inject(Router);

    public menuOpen = signal(false);
    public scrolled = signal(false);
    public progress = signal(0);
    public activeSection = signal('top');

    public navItems: ReadonlyArray<NavItem> = [
        { label: 'Inicio', id: 'top' },
        { label: 'Skills', id: 'certificaciones' },
        { label: 'Proyectos', id: 'proyectos' },
        { label: 'Experiencia', id: 'experiencia' },
        { label: 'Contacto', id: 'contacto' }
    ];
    public topItem: NavItem = this.navItems[0];

    ngOnInit() {
        this.updateScrollState();
    }

    @HostListener('window:scroll')
    onWindowScroll() {
        this.updateScrollState();
    }

    public pad(i: number): string {
        return (i + 1).toString().padStart(2, '0');
    }

    public isActive(item: NavItem): boolean {
        return this.activeSection() === item.id;
    }

    public goToSection(item: NavItem) {
        this.menuOpen.set(false);
        const doScroll = () => {
            if (item.id === 'top') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                return;
            }
            document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        };
        if (this.router.url === '/' || this.router.url === '') {
            doScroll();
        } else {
            this.router.navigate(['/']).then(() => setTimeout(doScroll, 120));
        }
    }

    private updateScrollState() {
        const y = window.scrollY;
        const max = document.documentElement.scrollHeight - window.innerHeight;
        this.progress.set(max > 0 ? Math.min(100, Math.max(0, (y / max) * 100)) : 0);
        this.scrolled.set(y > 8);

        let current = 'top';
        for (const item of this.navItems) {
            if (item.id === 'top') continue;
            const el = document.getElementById(item.id);
            if (el && el.getBoundingClientRect().top <= 140) {
                current = item.id;
            }
        }
        this.activeSection.set(current);
    }
}
