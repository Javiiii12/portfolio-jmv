import { Component, inject, signal, computed } from '@angular/core';
import { PortfolioService } from '../../core/portfolio.service';

@Component({
    selector: 'app-projects-grid',
    standalone: true,
    imports: [],
    templateUrl: './projects-grid.component.html'
})
export class ProjectsGridComponent {
    public portfolioService = inject(PortfolioService);

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
