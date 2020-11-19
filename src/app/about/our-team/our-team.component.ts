import { Component, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-our-team',
  templateUrl: './our-team.component.html',
  styleUrls: ['./our-team.component.css']
})
export class OurTeamComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

}
