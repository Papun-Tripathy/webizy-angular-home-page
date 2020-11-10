import { Component, OnInit } from '@angular/core';

import AOS from 'aos';

@Component({
  selector: 'app-why-webizy',
  templateUrl: './why-webizy.component.html',
  styleUrls: ['./why-webizy.component.css']
})
export class WhyWebizyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

}
