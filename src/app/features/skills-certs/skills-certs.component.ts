import { Component, inject } from '@angular/core';
import { PortfolioService } from '../../core/portfolio.service';

import { RouterModule } from '@angular/router';
import { LanguageService } from '../../core/language.service';

@Component({
    selector: 'app-skills-certs',
    standalone: true,
    imports: [RouterModule],
    templateUrl: './skills-certs.component.html'
})
export class SkillsCertsComponent {
    public portfolioService = inject(PortfolioService);
    public languageService = inject(LanguageService);
}
