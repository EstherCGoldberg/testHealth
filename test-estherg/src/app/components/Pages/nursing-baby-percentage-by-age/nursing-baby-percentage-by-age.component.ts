import { Component, OnInit } from "@angular/core";
import { EChartsOption, List } from 'echarts';
import { Nursing } from "src/app/Classes/nursing";
import { NursingService } from "src/app/Services/nursing.service";
import { MyIntercaptorInterceptor } from "src/app/Services/my-intercaptor.interceptor";

@Component({
  selector: 'app-nursing-baby-percentage-by-age',
  templateUrl: './nursing-baby-percentage-by-age.component.html',
  styleUrls: ['./nursing-baby-percentage-by-age.component.scss']
})
export class NursingBabyPercentageByAgeComponent {
  nursingInfoArray:Array<Nursing>=[];
  constructor(private myNursingService:NursingService){}
  
  ngOnInit():void{
  this.nursingInfoArray = this.myNursingService.getNursingBabyInfo();  }
  chartOption: EChartsOption = {
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data:  this.nursingInfoArray.map(e=>e.measure)
    },
    yAxis: {
      type: 'value'
    },
    series: [{
      data: this.nursingInfoArray.map(e=>e.age),
      type: 'line',
      areaStyle: {}
    }]
  }

}
