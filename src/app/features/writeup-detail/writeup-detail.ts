import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { map } from 'rxjs';

@Component({
  selector: 'app-writeup-detail',
  imports: [RouterModule, CommonModule],
  templateUrl: './writeup-detail.html',
  styleUrl: './writeup-detail.css'
})
export class WriteupDetail {
  private route = inject(ActivatedRoute);
  public id$ = this.route.paramMap.pipe(map(params => params.get('id')));
}
