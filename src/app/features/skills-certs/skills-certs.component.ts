import { Component, inject } from '@angular/core';
import { PortfolioService } from '../../core/portfolio.service';

@Component({
    selector: 'app-skills-certs',
    standalone: true,
    imports: [],
    templateUrl: './skills-certs.component.html'
})
export class SkillsCertsComponent {
    public portfolioService = inject(PortfolioService);
}
