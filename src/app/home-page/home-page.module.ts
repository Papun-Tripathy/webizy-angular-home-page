import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// For Importing Component's And Modules
import { InternReviewComponent } from './intern-review/intern-review.component';
import { OurClentsComponent } from './our-clents/our-clents.component';
import { HomePageComponent } from './home-page.component';
import { WeOfferComponent } from './we-offer/we-offer.component';
import { ServicesOfferingComponent } from './services-offering/services-offering.component';
import { OurInfoComponent } from './our-info/our-info.component';
import { WhyWebizyComponent } from './why-webizy/why-webizy.component';
import { WhyHireUsComponent } from './why-hire-us/why-hire-us.component';
import { GroupWebizyComponent } from './group-webizy/group-webizy.component';

// 3re Party
import { IvyCarouselModule } from 'angular-responsive-carousel';


@NgModule({
	declarations: [
		HomePageComponent,
		InternReviewComponent,
	    OurClentsComponent,
	    WeOfferComponent,
	    ServicesOfferingComponent,
	    OurInfoComponent,
	    WhyWebizyComponent,
	    WhyHireUsComponent,
	    GroupWebizyComponent,
	],
    imports: [
    	CommonModule,
    	IvyCarouselModule,
  	],
  	exports: [
		HomePageComponent,
		InternReviewComponent,
		OurClentsComponent,
	    WeOfferComponent,
	    ServicesOfferingComponent,
	    OurInfoComponent,
	    WhyWebizyComponent,
	    WhyHireUsComponent,
	    GroupWebizyComponent,
	],
	bootstrap: []
})
export class HomePageModule {}
