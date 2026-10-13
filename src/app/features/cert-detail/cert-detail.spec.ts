import { ComponentFixture, TestBed } from '@angular/core/testing';
import { signal } from '@angular/core';
import { ActivatedRoute, convertToParamMap, provideRouter } from '@angular/router';
import { of } from 'rxjs';

import { CertDetail } from './cert-detail';
import { PortfolioService } from '../../core/portfolio.service';

describe('CertDetail', () => {
  let component: CertDetail;
  let fixture: ComponentFixture<CertDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CertDetail],
      providers: [
        provideRouter([]),
        { provide: ActivatedRoute, useValue: { paramMap: of(convertToParamMap({ id: 'oswe' })) } },
        { provide: PortfolioService, useValue: { portfolioData: signal(undefined) } },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CertDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
