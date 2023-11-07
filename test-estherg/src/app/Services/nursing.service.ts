import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Nursing } from '../Classes/nursing';
import { SurveyPatientExperience }from'../Classes/survey-patient-experience';
import { HttpClient } from '@angular/common/http';
import { MyIntercaptorInterceptor } from './my-intercaptor.interceptor';
import { NursingBabyPercentageByAgeComponent } from '../components/Pages/nursing-baby-percentage-by-age/nursing-baby-percentage-by-age.component';
 

@Injectable({
  providedIn: 'root'
})
export class NursingService {
  static getNursingBabyInfo() {
    throw new Error("Method not implemented.");
  }
  private percentageApi = 'https://datadashboard.health.gov.il/api/experienceInstitutes/surveyPatientExperienceVariables';
  private nursingApi = 'https://datadashboard.health.gov.il/api/checkup/nursing';
  private percentageInfo:Array<SurveyPatientExperience> = [];
  //private nursingInfo:Array<Nursing> = [];
  private nursingInfo:Array<Nursing>=
    [new Nursing(2016,1,16.3,"ללא הנקה",23125),
    new Nursing(2016,1,54.2,"הנקה מלאה",77156),
    new Nursing(2016,1,29.5,"הנקה משולבת",41981),
    new Nursing(2016,2,42.5,"הנקה מלאה",60501)];
  constructor(private myHttp: HttpClient) {}
 
  loadPercentageData() {
    debugger;
    //retuen this.myHttp.get<Nursing[]>(this.apiUrl);
     this.myHttp.get<SurveyPatientExperience[]>(this.percentageApi).subscribe(
      (myData)=>
       {
        debugger;
         this.percentageInfo = myData;
       },
       myErr=>
       {
         alert(myErr.message);
       }
     );
  }
  loadNursingData() {
    debugger;
    //retuen this.myHttp.get<Nursing[]>(this.apiUrl);
     this.myHttp.get<Nursing[]>(this.nursingApi).subscribe(
      (myData)=>
       {
        debugger;
         this.nursingInfo = myData;
       },
       myErr=>
       {
         alert(myErr.message);
       }
     );
  }
  getPercentageInfo():Array<Nursing>{
    return this.nursingInfo;
  }
  getNursingBabyInfo():Array<Nursing>{
    return this.nursingInfo;
  }
}