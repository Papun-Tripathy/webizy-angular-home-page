import { Component, OnInit } from '@angular/core';

import AOS from 'aos';

@Component({
  selector: 'app-we-offer',
  templateUrl: './we-offer.component.html',
  styleUrls: ['./we-offer.component.css']
})
export class WeOfferComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

}
