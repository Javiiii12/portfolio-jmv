import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteupDetail } from './writeup-detail';

describe('WriteupDetail', () => {
  let component: WriteupDetail;
  let fixture: ComponentFixture<WriteupDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WriteupDetail],
    }).compileComponents();

    fixture = TestBed.createComponent(WriteupDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
