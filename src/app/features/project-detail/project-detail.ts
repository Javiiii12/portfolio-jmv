import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule, Location } from '@angular/common';
import { map } from 'rxjs';

@Component({
  selector: 'app-project-detail',
  imports: [RouterModule, CommonModule],
  templateUrl: './project-detail.html',
  styleUrl: './project-detail.css'
})
export class ProjectDetail {
  private route = inject(ActivatedRoute);
  private location = inject(Location);
  public id$ = this.route.paramMap.pipe(map(params => params.get('id')));

  goBack(event: Event) {
    event.preventDefault();
    this.location.back();
  }
}
