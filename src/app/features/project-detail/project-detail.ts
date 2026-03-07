import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { map } from 'rxjs';

@Component({
  selector: 'app-project-detail',
  imports: [RouterModule, CommonModule],
  templateUrl: './project-detail.html',
  styleUrl: './project-detail.css'
})
export class ProjectDetail {
  private route = inject(ActivatedRoute);
  public id$ = this.route.paramMap.pipe(map(params => params.get('id')));
}
