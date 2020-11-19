import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogSectionComponent } from './blog-section.component';
import { AngularComponent } from './angular/angular.component';
import { ReactComponent } from './react/react.component';


@NgModule({
	declarations: [
		BlogSectionComponent, 
		AngularComponent, 
		ReactComponent,
	],
	imports: [
		CommonModule,
	],
	exports: [
		BlogSectionComponent,
	]
})
export class BlogSectionModule { }
