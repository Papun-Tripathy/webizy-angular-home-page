import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-our-best-intern',
  templateUrl: './our-best-intern.component.html',
  styleUrls: ['./our-best-intern.component.css'],
})
export class OurBestInternComponent implements OnInit {
  constructor() {}

  totalpics: number;
  themeArrow: string = 'light';
  howToIn: string = 'ease-in';
  images: object = [
	{ path: 'assets/images/intern1.jpeg' }, //1
	{ path: 'assets/images/intern2.jpeg' }, //2
	{ path: 'assets/images/intern3.jpeg' }, //3
	{ path: 'assets/images/intern4.jpeg' }, //4
	{ path: 'assets/images/intern1.jpeg' }, // the rest are the copy of above four to make lazyloading work fine in mobile swipes
	{ path: 'assets/images/intern2.jpeg' }, // lazy loading image load outside border is set to 6
	{ path: 'assets/images/intern3.jpeg' }, // to not to face the broken type effect while a boost swipe
	{ path: 'assets/images/intern4.jpeg' },
	{ path: 'assets/images/intern1.jpeg' },
	{ path: 'assets/images/intern2.jpeg' },
	{ path: 'assets/images/intern3.jpeg' },
	{ path: 'assets/images/intern4.jpeg' },
	{ path: 'assets/images/intern1.jpeg' },
	{ path: 'assets/images/intern2.jpeg' },
	{ path: 'assets/images/intern3.jpeg' },
	{ path: 'assets/images/intern4.jpeg' },
  ];

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
	this.totalpics =
	  window.innerWidth > 1200
		? 4
		: window.innerWidth > 992
		? 3
		: window.innerWidth > 450
		? 2
		: 1;
  }

  ngOnInit(): void {
	this.getScreenSize();
  }
}
