import { Component, OnInit } from '@angular/core';

import AOS from'aos';

@Component({
  selector: 'app-our-info',
  templateUrl: './our-info.component.html',
  styleUrls: ['./our-info.component.css']
})
export class OurInfoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

}
