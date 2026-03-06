import { Component, inject } from '@angular/core';
import { PortfolioService } from '../../core/portfolio.service';

@Component({
    selector: 'app-hero',
    standalone: true,
    imports: [],
    templateUrl: './hero.component.html'
})
export class HeroComponent {
    public portfolioService = inject(PortfolioService);
}
