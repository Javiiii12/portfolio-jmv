import { Component, inject } from '@angular/core';
import { PortfolioService } from '../../core/portfolio.service';

@Component({
    selector: 'app-experience-education',
    standalone: true,
    imports: [],
    templateUrl: './experience-education.component.html'
})
export class ExperienceEducationComponent {
    public portfolioService = inject(PortfolioService);
}
