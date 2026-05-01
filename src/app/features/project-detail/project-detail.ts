import { Component, inject, computed } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule, Location } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { PortfolioService } from '../../core/portfolio.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-project-detail',
  imports: [RouterModule, CommonModule],
  templateUrl: './project-detail.html',
  styleUrl: './project-detail.css'
})
export class ProjectDetail {
  private route = inject(ActivatedRoute);
  private location = inject(Location);
  public portfolioService = inject(PortfolioService);
  private sanitizer = inject(DomSanitizer);

  public id$ = this.route.paramMap.pipe(map(params => params.get('id')));
  public idSignal = toSignal(this.id$);

  public projectData = computed(() => {
    const data = this.portfolioService.portfolioData();
    const id = this.idSignal();
    if (data && data.projectDetails && id) {
      return data.projectDetails[id];
    }
    return null;
  });

  goBack(event: Event) {
    event.preventDefault();
    this.location.back();
  }

  sanitizeHtml(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  sanitizeResourceUrl(url: string | undefined) {
    if (!url) return '';
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
