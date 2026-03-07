import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertDetail } from './cert-detail';

describe('CertDetail', () => {
  let component: CertDetail;
  let fixture: ComponentFixture<CertDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CertDetail],
    }).compileComponents();

    fixture = TestBed.createComponent(CertDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
