import { Component } from '@angular/core';
import { faHome,faAngleDown,faAngleUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.scss']
})
export class SideNavbarComponent {
  elements: any[] = [
    { id: 1, name: 'קורונה', isActive: false, 
    links:[{id:11,name:'דשבורד הקרונה הלאומי', url:''},{id:12,name:'מפת תחנות בדיקה', url:''}] },
    { id: 2, name: 'פוליו', isActive: false , url:''},
    { id: 3, name: 'הנקה', isActive: false , 
    links:[{id:31,name:'תינוקות יונקים אחוז הנקה לפי גיל', url:'nursingByAge'},
    {id:32,name:'תינוקות יונקים מגמה שנתית', url:'nursingYearlyTrend'}]},
    { id: 4, name: 'סקרי דעת קהל', isActive: false , 
    links:[{id:41,name:'הפרש ציון מהממוצע הארצי לפי גודל מוסד ', url:'surveryPaitent'}]},
    { id: 5, name: 'התחסנות ילדים', isActive: false, url:'' },
    { id: 6, name: 'חדרי איכות', isActive: false, url:'' }
  ];
faHome=faHome;
faAngleDown=faAngleDown;
faAngleUp=faAngleUp;
toggleElement(element:any) {
  element.isActive = !element.isActive;
}
}
