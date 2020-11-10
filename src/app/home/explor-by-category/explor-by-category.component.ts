import { Component, OnInit } from '@angular/core';

import AOS from 'aos';

@Component({
  selector: 'app-explor-by-category',
  templateUrl: './explor-by-category.component.html',
  styleUrls: ['./explor-by-category.component.css']
})
export class ExplorByCategoryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

}
