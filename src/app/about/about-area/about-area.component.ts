import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';

import AOS from 'aos';

@Component({
	selector: 'app-about-area',
	templateUrl: './about-area.component.html',
	styleUrls: ['./about-area.component.css'],
})
export class AboutAreaComponent implements OnInit {

	constructor() {}

	ngOnInit(): void {
		AOS.init();
	}

	// @HostListener('window:resize', ['$event'])
	// getScreenSize(event?) {
	// 	this.aboutareaImg = window.innerWidth > 768 ? 'fade-in' : '';
	// 	window.innerWidth < 768 ? document.getElementById('aboutImg').setAttribute('data-aos','') : document.getElementById('aboutImg').setAttribute('data-aos','fade-in') ;
	// }
}
