import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { NursingBabyPercentageByAgeComponent } from '../../Pages/nursing-baby-percentage-by-age/nursing-baby-percentage-by-age.component';
import { NursingBabyYearlyTrendComponent } from '../../Pages/nursing-baby-yearly-trend/nursing-baby-yearly-trend.component';
import { SurveyPatientExperience } from 'src/app/Classes/survey-patient-experience';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
constructor(){}
ngOnInit(){
  //const routes: Routes = [
    //{ path: 'nursingByAge', component: NursingBabyPercentageByAgeComponent },
    //{ path: 'nursingYearlyTrend', component: NursingBabyYearlyTrendComponent },
    //{ path: 'surveryPaitent', component: SurveyPatientExperience },
    //{ path: '', component: NursingBabyPercentageByAgeComponent }

      //{ path: '',   redirectTo: '/heroes', pathMatch: 'full' },
      //{ path: '**', component: PageNotFoundComponent }
  //];
 //this.router.navigate(['./about']);
}
}
