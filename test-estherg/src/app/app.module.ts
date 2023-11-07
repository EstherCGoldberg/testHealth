import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/Shared/header/header.component';
import { SideNavbarComponent } from './components/Shared/side-navbar/side-navbar.component';
import { MainComponent } from './components/Shared/main/main.component';
import { BaseComponent } from './components/Shared/base/base.component';
import { SurveyPatientExperienceComponent } from './components/Pages/survey-patient-experience/survey-patient-experience.component';
import { NursingBabyPercentageByAgeComponent } from './components/Pages/nursing-baby-percentage-by-age/nursing-baby-percentage-by-age.component';
import { NursingBabyYearlyTrendComponent } from './components/Pages/nursing-baby-yearly-trend/nursing-baby-yearly-trend.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import {RouterModule, Routes} from '@angular/router'
//import { EchartsxModule } from 'echarts-for-angular';
import { NgxEchartsModule } from 'ngx-echarts';
import { RouterOutletComponent } from './components/router-outlet/router-outlet.component';
import { MyIntercaptorInterceptor } from './Services/my-intercaptor.interceptor';

 
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideNavbarComponent,
    MainComponent,
    BaseComponent,
    SurveyPatientExperienceComponent,
    NursingBabyPercentageByAgeComponent,
    NursingBabyYearlyTrendComponent,
    RouterOutletComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
   // EchartsxModule,
    //NgxEchartsModule
    RouterModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MyIntercaptorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
