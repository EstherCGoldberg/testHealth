import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NursingBabyPercentageByAgeComponent } from './nursing-baby-percentage-by-age.component';

describe('NursingBabyPercentageByAgeComponent', () => {
  let component: NursingBabyPercentageByAgeComponent;
  let fixture: ComponentFixture<NursingBabyPercentageByAgeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NursingBabyPercentageByAgeComponent]
    });
    fixture = TestBed.createComponent(NursingBabyPercentageByAgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
