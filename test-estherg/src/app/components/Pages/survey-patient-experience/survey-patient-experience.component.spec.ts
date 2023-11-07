import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyPatientExperienceComponent } from './survey-patient-experience.component';

describe('SurveyPatientExperienceComponent', () => {
  let component: SurveyPatientExperienceComponent;
  let fixture: ComponentFixture<SurveyPatientExperienceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SurveyPatientExperienceComponent]
    });
    fixture = TestBed.createComponent(SurveyPatientExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
