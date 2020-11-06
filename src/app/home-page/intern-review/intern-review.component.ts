import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';
@Component({
  selector: 'app-intern-review',
  templateUrl: './intern-review.component.html',
  styleUrls: ['./intern-review.component.css',],
})
export class InternReviewComponent implements OnInit {
  screenWidth: number;
  carouselHeight: number;
  constructor() {
    this.getScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
    this.screenWidth = window.innerWidth;
    this.carouselHeight =
      this.screenWidth > 990
        ? 470
        : this.screenWidth > 435
        ? 590
        : this.screenWidth > 531
        ? 620
        : this.screenWidth > 433
        ? 590
        : this.screenWidth > 433
        ? 612
        : this.screenWidth > 399
        ? 590
        : 550;
  }
  ngOnInit(): void {}
}
