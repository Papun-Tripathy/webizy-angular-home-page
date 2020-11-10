import { Component, OnInit } from '@angular/core';

import AOS from 'aos';

@Component({
  selector: 'app-why-hire-us',
  templateUrl: './why-hire-us.component.html',
  styleUrls: ['./why-hire-us.component.css']
})
export class WhyHireUsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

}
