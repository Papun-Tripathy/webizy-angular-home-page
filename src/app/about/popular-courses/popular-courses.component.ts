import { Component, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
	selector: 'app-popular-courses',
	templateUrl: './popular-courses.component.html',
	styleUrls: ['./popular-courses.component.css'],
})
export class PopularCoursesComponent implements OnInit {
	constructor() {		
  	}
  	ngOnInit(): void {
		AOS.init();
  	}
}
