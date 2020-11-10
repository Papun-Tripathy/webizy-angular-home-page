import { Component, OnInit } from '@angular/core';

import AOS from 'aos';

@Component({
  selector: 'app-webizy-group',
  templateUrl: './webizy-group.component.html',
  styleUrls: ['./webizy-group.component.css']
})
export class WebizyGroupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

}
