import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { States } from './covid';

@Injectable({
  providedIn: 'root'
})
export class Covid19Service {

  status: any;

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

  getDaily(){
    return this.http.get<any>('https://covidtracking.com/api/states');
  }
}
