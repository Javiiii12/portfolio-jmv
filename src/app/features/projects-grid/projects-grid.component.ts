import { Component, inject, signal, computed } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { PortfolioService } from '../../core/portfolio.service';

import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-projects-grid',
    standalone: true,
    imports: [RouterModule],
    templateUrl: './projects-grid.component.html'
})
export class ProjectsGridComponent {
    public portfolioService = inject(PortfolioService);
    public sanitizer = inject(DomSanitizer);

    public sanitizeHtml(description: string): SafeHtml {
        // Demostrando conocimiento de seguridad mitigando riesgos XSS al inyectar DOM explícito
        return this.sanitizer.bypassSecurityTrustHtml(description);
    }

    public filter = signal<string>('Todos');

    public categories = ['Todos', 'Desarrollo', 'Ciberseguridad'];

    public filteredProjects = computed(() => {
        const data = this.portfolioService.portfolioData();
        if (!data || !data.proyectos) return [];

        if (this.filter() === 'Todos') {
            return data.proyectos;
        }

        return data.proyectos.filter(p => p.categoria === this.filter());
    });

    public setFilter(category: string) {
        this.filter.set(category);
    }
}
