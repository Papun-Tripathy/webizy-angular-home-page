import { Component, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-form-part',
  templateUrl: './form-part.component.html',
  styleUrls: ['./form-part.component.css']
})
export class FormPartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

}
