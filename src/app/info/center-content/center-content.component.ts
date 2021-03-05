import { Component, OnInit } from '@angular/core';
import { Content } from '../content';
import { InfoService } from '../info.service';

@Component({
  selector: 'app-center-content',
  templateUrl: './center-content.component.html',
  styleUrls: ['./center-content.component.scss']
})
export class CenterContentComponent implements OnInit {
  building = '../../../assets/images/info/building3.png';
  person = '../../../assets/images/info/043.png';
  searchImage = '../../../assets/images/info/loupe.png';
  projectImage = '../../../assets/images/info/tag.png';
  roleImage = '../../../assets/images/info/account.png';
  content: Content[] = [];




  constructor(
    private infoService: InfoService
  ) { }

  ngOnInit(): void {
    this.content = this.infoService.getContent();
  }

}
