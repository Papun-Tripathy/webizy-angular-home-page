import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-our-clents',
  templateUrl: './our-clents.component.html',
  styleUrls: ['./our-clents.component.css']
})
export class OurClentsComponent implements OnInit {

    screenHeight: number;
    screenWidth: number;

    itemsPerCarousel: number;

    constructor() {
        this.getScreenSize();
      }
      
      @HostListener('window:resize', ['$event'])
      getScreenSize(event?) {
        this.screenHeight = window.innerHeight;
        this.screenWidth = window.innerWidth;
        this.itemsPerCarousel = (this.screenWidth >850) ? 4 : (this.screenWidth>680) ? 3 : (this.screenWidth> 380) ? 2 : 1;
        console.log(this.screenHeight, this.screenWidth, this.itemsPerCarousel);
    }

  ngOnInit(): void {
  }

}
