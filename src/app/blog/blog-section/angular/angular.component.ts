import { Component, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css']
})
export class AngularComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

}
