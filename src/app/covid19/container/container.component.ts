import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { States } from '../covid';
import { Covid19Service } from '../covid19.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {
  status: States[];
  constructor(private covid19Service: Covid19Service) { }

  ngOnInit(): void {
    this.covid19Service.getDaily().subscribe(res => {
      const response: HttpResponse<States[]> = res;
      // const status: number = res.status;
      // const statusText: string = res.statusText;
      // const headers: HttpHeaders = res.headers;
      this.status = res;
      console.log(this.status);

    });
  }

}
