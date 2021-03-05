import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-right-panel',
  templateUrl: './right-panel.component.html',
  styleUrls: ['./right-panel.component.scss']
})
export class RightPanelComponent implements OnInit {
  rocket = '../../../assets/images/info/rocket.png';
  github = '../../../assets/images/info/github.png';
  behance = '../../../assets/images/info/behance.png';
  support = '../../../assets/images/info/protest.png';
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
  }

  apiRegister(): void {
    this.router.navigate(['../api-register'], { relativeTo: this.activatedRoute });
  }

}
