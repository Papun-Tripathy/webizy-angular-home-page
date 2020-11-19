import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { AboutBannerComponent } from './about-banner/about-banner.component';
import { AboutAreaComponent } from './about-area/about-area.component';
import { BestItComponent } from './best-it/best-it.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { WhoWeAreComponent } from './who-we-are/who-we-are.component';
import { PopularCoursesComponent } from './popular-courses/popular-courses.component';



@NgModule({
	declarations: [
		AboutComponent,
		AboutBannerComponent, 
		AboutAreaComponent, 
		BestItComponent, 
		OurTeamComponent, 
		WhoWeAreComponent, 
		PopularCoursesComponent
	],
	imports: [
		CommonModule,
	],
	exports:[
		AboutComponent,
	]
})
export class AboutModule { }
