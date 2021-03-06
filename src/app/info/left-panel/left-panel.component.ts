import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.scss']
})
export class LeftPanelComponent implements OnInit {
  image = '../../../assets/images/info/me-red.png';
  bookmark = '../../../assets/images/info/bookmark2.png';
  book = '../../../assets/images/info/book.png';
  page1 = 'https://pubmed.ncbi.nlm.nih.gov/29126174/';
  page2 = 'https://hdl.handle.net/11296/v69uq6';
  constructor() { }

  ngOnInit(): void {
    // window.location.replace(this.url);
  }

}
