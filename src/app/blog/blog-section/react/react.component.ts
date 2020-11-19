import { Component, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-react',
  templateUrl: './react.component.html',
  styleUrls: ['./react.component.css']
})
export class ReactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

}
