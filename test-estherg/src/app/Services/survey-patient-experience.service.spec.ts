import { TestBed } from '@angular/core/testing';

import { SurveyPatientExperienceService } from './survey-patient-experience.service';

describe('SurveyPatientExperienceService', () => {
  let service: SurveyPatientExperienceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SurveyPatientExperienceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
