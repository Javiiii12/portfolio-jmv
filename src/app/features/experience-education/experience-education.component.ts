import { Component, inject } from '@angular/core';
import { PortfolioService } from '../../core/portfolio.service';
import { LanguageService } from '../../core/language.service';

@Component({
    selector: 'app-experience-education',
    standalone: true,
    imports: [],
    templateUrl: './experience-education.component.html'
})
export class ExperienceEducationComponent {
    public portfolioService = inject(PortfolioService);
    public languageService = inject(LanguageService);
}
