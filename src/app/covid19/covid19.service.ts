import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { States } from './covid';

@Injectable({
  providedIn: 'root'
})
export class Covid19Service {

  status: any;

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line: typedef
  getDaily() {
    return this.http.get('/covid/states');
  }
}
