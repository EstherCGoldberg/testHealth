import { Component,OnInit } from '@angular/core';
import { NursingService } from './Services/nursing.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private myNursingService:NursingService){}

  ngOnInit():void{
    // this.myNursingService.getNursingBabyInfo;
    this.myNursingService.loadNursingData();
    this.myNursingService.loadNursingData();
  }
  title = 'test-estherg';
}
