import { Injectable } from '@angular/core';
import {SurveyPatientExperience} from '../Classes/survey-patient-experience'

@Injectable({
  providedIn: 'root'
})
export class SurveyPatientExperienceService {

  constructor() { }
  getSurveyPatientExperience(){
    {
          fetch(`https://datadashboard.health.gov.il/api/experienceInstitutes/surveyPatientExperienceVariables`)
             .then(result => {
                  return result.json();
              }).then(result => {
                  //init(result);
             })
  }
}
}
