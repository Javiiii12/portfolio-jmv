import { ComponentFixture, TestBed } from '@angular/core/testing';
import { signal } from '@angular/core';
import { ActivatedRoute, convertToParamMap, provideRouter } from '@angular/router';
import { of } from 'rxjs';

import { WriteupDetail } from './writeup-detail';
import { PortfolioService } from '../../core/portfolio.service';

describe('WriteupDetail', () => {
  let component: WriteupDetail;
  let fixture: ComponentFixture<WriteupDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WriteupDetail],
      providers: [
        provideRouter([]),
        { provide: ActivatedRoute, useValue: { paramMap: of(convertToParamMap({ id: 'echo-response' })) } },
        { provide: PortfolioService, useValue: { portfolioData: signal(undefined) } },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(WriteupDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
