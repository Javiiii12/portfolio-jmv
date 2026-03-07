import { Component, inject, computed } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule, Location } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { PortfolioService } from '../../core/portfolio.service';
import { ICertDetail } from '../../core/portfolio.interfaces';

@Component({
  selector: 'app-cert-detail',
  imports: [RouterModule, CommonModule],
  templateUrl: './cert-detail.html',
  styleUrl: './cert-detail.css',
})
export class CertDetail {
  private route = inject(ActivatedRoute);
  private location = inject(Location);
  public portfolioService = inject(PortfolioService);

  public idSignal = toSignal(this.route.paramMap.pipe(map(params => params.get('id'))));

  public currentCert = computed<ICertDetail | null>(() => {
    const id = this.idSignal();
    const data = this.portfolioService.portfolioData();
    if (!id || !data || !data.certDetails) return null;

    const key = Object.keys(data.certDetails).find(k => k.toLowerCase() === id.toLowerCase());
    return key ? data.certDetails[key] : null;
  });


  goBack(event: Event) {
    event.preventDefault();
    this.location.back();
  }
}
