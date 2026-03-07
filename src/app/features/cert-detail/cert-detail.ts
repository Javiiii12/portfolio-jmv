import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { map } from 'rxjs';

@Component({
  selector: 'app-cert-detail',
  imports: [RouterModule, CommonModule],
  templateUrl: './cert-detail.html',
  styleUrl: './cert-detail.css',
})
export class CertDetail {
  private route = inject(ActivatedRoute);
  public id$ = this.route.paramMap.pipe(map(params => params.get('id')));
}
