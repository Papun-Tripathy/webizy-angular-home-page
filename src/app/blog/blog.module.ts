import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';
import { BannerComponent } from './banner/banner.component';
import { BlogContentComponent } from './blog-content/blog-content.component';
import { BlogSectionModule } from './blog-section/blog-section.module';

@NgModule({
	declarations: [
		BlogComponent,
		BannerComponent,
		BlogContentComponent,
	],
	imports: [
		CommonModule,
		BlogSectionModule,
	],
	exports: [
		BlogComponent,
	],
})
export class BlogModule {}
