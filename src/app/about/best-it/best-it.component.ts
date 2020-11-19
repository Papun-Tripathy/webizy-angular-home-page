import { Component, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-best-it',
  templateUrl: './best-it.component.html',
  styleUrls: ['./best-it.component.css']
})
export class BestItComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

}
