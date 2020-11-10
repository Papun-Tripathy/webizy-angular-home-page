import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { TopBannerComponent } from './top-banner/top-banner.component';
import { WeOfferComponent } from './we-offer/we-offer.component';
import { ExplorByCategoryComponent } from './explor-by-category/explor-by-category.component';
import { OurInfoComponent } from './our-info/our-info.component';
import { WhyWebizyComponent } from './why-webizy/why-webizy.component';
import { WhyHireUsComponent } from './why-hire-us/why-hire-us.component';
import { WebizyGroupComponent } from './webizy-group/webizy-group.component';
import { OurClentsComponent } from './our-clents/our-clents.component';
import { InternReviewComponent } from './intern-review/intern-review.component';

import { IvyCarouselModule } from 'angular-responsive-carousel';

@NgModule({
	declarations: [
		HomeComponent,
		TopBannerComponent,
		WeOfferComponent,
		ExplorByCategoryComponent,
		OurInfoComponent,
		InternReviewComponent,
		OurClentsComponent,
		WhyWebizyComponent,
		WhyHireUsComponent,
		WebizyGroupComponent,
	],
	imports: [
		CommonModule,
		IvyCarouselModule
	],
	exports: [
		HomeComponent
	],
})
export class HomeModule {}
