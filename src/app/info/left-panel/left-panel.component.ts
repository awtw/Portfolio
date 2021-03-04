import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.scss']
})
export class LeftPanelComponent implements OnInit {
  image = '../../../assets/images/info/me-red.png';
  bookmark = '../../../assets/images/info/bookmark2.png';
  constructor() { }

  ngOnInit(): void {
  }

}
