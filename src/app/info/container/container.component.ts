import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss', '../main.scss']
})
export class ContainerComponent implements OnInit {

  constructor(
    private title: Title
  ) { }

  ngOnInit(): void {
    this.title.setTitle('Info About Me');
  }

}
