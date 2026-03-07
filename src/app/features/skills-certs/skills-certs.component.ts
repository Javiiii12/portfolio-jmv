import { Component, inject, signal } from '@angular/core';
import { PortfolioService } from '../../core/portfolio.service';
import { ICertificacion } from '../../core/portfolio.interfaces';

import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-skills-certs',
    standalone: true,
    imports: [RouterModule],
    templateUrl: './skills-certs.component.html'
})
export class SkillsCertsComponent {
    public portfolioService = inject(PortfolioService);
    public selectedCert = signal<ICertificacion | null>(null);

    public openModal(cert: ICertificacion) {
        this.selectedCert.set(cert);
    }

    public closeModal() {
        this.selectedCert.set(null);
    }
}
