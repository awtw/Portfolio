import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { States } from './covid';

@Injectable({
  providedIn: 'root'
})
export class Covid19Service {

  status: any;

  apiUrl = 'https://covidtracking.com/api/';

  httpOptions = {
    headers: new HttpHeaders(
      { 'access-control-allow-credentials': 'true',  'Access-Control-Allow-Origin': 'http://localhost:4200', 'Access-Control-Allow-Headers': 'DNT,X-Mx-ReqToken,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type', 'api-version': 'v2' }
    )
  };

  constructor(private http: HttpClient) { }
  // getDaily(): void {
  //   this.http.get<any>('https://covidtracking.com/api/states').subscribe(res => {
  //     const response: HttpResponse<any> = res;
  //     const status: number = res.status;
  //     const statusText: string = res.statusText;
  //     const headers: HttpHeaders = res.headers;
  //     this.status = response;
  //     // console.log(response);

  //   });
  // }

  getDaily(): Observable<States[]>{
    // tslint:disable-next-line: deprecation
    // return this.http.get<States[]>( 'https://api.covidtracking.com/v1/us/daily', this.httpOptions).subscribe(res => {
    //   const response: HttpResponse<any> = res;
    //   // const status: number = res.status;
    //   // const statusText: string = res.statusText;
    //   // const headers: HttpHeaders = res.headers;
    //   this.status = res;
    //   console.log(this.status);

    // });
    return this.http.get<any[]>('https://data.taipei/api/comments/doc', this.httpOptions);
  }



  // public getBackendData(
  // ): Observable<any> {
  //   const getURL = 後端API的Domain/api/user/GetAllUser;
  //   return this.http.get<any>(getURL, this.httpOptions);
  // }
}
