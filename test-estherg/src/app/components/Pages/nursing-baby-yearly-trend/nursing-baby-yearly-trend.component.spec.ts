import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NursingBabyYearlyTrendComponent } from './nursing-baby-yearly-trend.component';

describe('NursingBabyYearlyTrendComponent', () => {
  let component: NursingBabyYearlyTrendComponent;
  let fixture: ComponentFixture<NursingBabyYearlyTrendComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NursingBabyYearlyTrendComponent]
    });
    fixture = TestBed.createComponent(NursingBabyYearlyTrendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
