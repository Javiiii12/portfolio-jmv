import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule, Location } from '@angular/common';
import { map } from 'rxjs';

@Component({
  selector: 'app-writeup-detail',
  imports: [RouterModule, CommonModule],
  templateUrl: './writeup-detail.html',
  styleUrl: './writeup-detail.css'
})
export class WriteupDetail {
  private route = inject(ActivatedRoute);
  private location = inject(Location);
  public id$ = this.route.paramMap.pipe(map(params => params.get('id')));

  goBack(event: Event) {
    event.preventDefault();
    this.location.back();
  }
}
