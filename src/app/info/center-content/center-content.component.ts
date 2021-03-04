import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-center-content',
  templateUrl: './center-content.component.html',
  styleUrls: ['./center-content.component.scss']
})
export class CenterContentComponent implements OnInit {
  building = '../../../assets/images/info/building3.png';
  person = '../../../assets/images/info/043.png';
  constructor() { }

  ngOnInit(): void {
  }

}
