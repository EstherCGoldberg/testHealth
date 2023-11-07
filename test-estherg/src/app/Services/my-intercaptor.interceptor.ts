import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Nursing } from '../Classes/nursing';
import { HttpClient } from '@angular/common/http';
import { NursingByAge } from '../Classes/nursing-by-age';

@Injectable()
export class MyIntercaptorInterceptor implements HttpInterceptor {
  constructor(private http: HttpClient) {}
  private apiUrl = 'https://datadashboard.health.gov.il/api/checkup/nursing';
  public nursingInfo:Array<Nursing> = [];

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Perform any required preprocessing here, such as adding headers
    const modifiedRequest = request.clone({
      // Modify request headers or properties if needed
    });

    // Make the API call
    return this.http.request(modifiedRequest).pipe(
      tap((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          // Handle the response here
          this.processResponse(event);
        }
      })
    );
  }

  private processResponse(response: HttpResponse<any>): void {
    // Read the data from the response
    //let getData:Nursing[]=[];
    this.http.get<Nursing[]>(this.apiUrl).subscribe(
      (myData)=>
       {
         this.nursingInfo = myData;
       },
       myErr=>
       {
         alert(myErr.message);
       }
    )
    // Make necessary conversions - Example: Converting response properties to uppercase
    let convertedData = this.convertDataToNursingByAge(this.nursingInfo);

    // Store the converted data or perform any other required actions
    console.log('Converted data:', convertedData);
  }

  private convertDataToNursingByAge(data: Nursing[]): any {
      let nursingByAge:Array<NursingByAge>=[];
      let convertedData = {};
      data.forEach(n => {
       // nursingByAge.push(n.age,n.measure)
      }); 
      return NursingByAge;
  }
}