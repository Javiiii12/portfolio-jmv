import { Component, inject, computed } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule, Location } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { PortfolioService } from '../../core/portfolio.service';
import { LanguageService } from '../../core/language.service';
import { IWriteupDetail } from '../../core/portfolio.interfaces';

@Component({
  selector: 'app-writeup-detail',
  imports: [RouterModule, CommonModule],
  templateUrl: './writeup-detail.html',
  styleUrl: './writeup-detail.css'
})
export class WriteupDetail {
  private route = inject(ActivatedRoute);
  private location = inject(Location);
  public portfolioService = inject(PortfolioService);
  public languageService = inject(LanguageService);

  public idSignal = toSignal(this.route.paramMap.pipe(map(params => params.get('id'))));

  public currentWriteup = computed(() => {
    const id = this.idSignal();
    const data = this.portfolioService.portfolioData();
    if (!id || !data || !data.writeupDetails) return null;

    const key = Object.keys(data.writeupDetails).find(k => k.toLowerCase() === id.toLowerCase());
    if (!key) return null;

    const baseWriteup = data.writeupDetails[key];
    const lang = this.languageService.currentLang().toLowerCase() as 'es' | 'en';

    return {
      id: baseWriteup.id,
      ...baseWriteup[lang]
    };
  });

  goBack(event: Event) {
    event.preventDefault();
    this.location.back();
  }
}
