import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// For Importing Component's And Modules
import { InternReviewComponent } from './intern-review/intern-review.component';
import { OurClentsComponent } from './our-clents/our-clents.component';
import { HomePageComponent } from './home-page.component';

// 3re Party
import { IvyCarouselModule } from 'angular-responsive-carousel';


@NgModule({
	declarations: [
		HomePageComponent,
		InternReviewComponent,
	    OurClentsComponent,
	],
    imports: [
    	CommonModule,
    	IvyCarouselModule,
  	],
  	exports: [
		HomePageComponent,
		InternReviewComponent,
	],
	bootstrap: []
})
export class HomePageModule {}
