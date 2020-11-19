import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HomePageModule } from './home-page/home-page.module';
import { HomeModule } from './home/home.module';
import { AboutModule } from './about/about.module';
import { CareersModule } from './careers/careers.module';
import { BlogModule } from './blog/blog.module';


@NgModule({
	declarations: [
		AppComponent,
	],
	imports: [
		BrowserModule, 
		HomePageModule,
		HomeModule,
		AboutModule,
		CareersModule,
		BlogModule,
	],
	providers: [],
	bootstrap: [AppComponent]
	})
export class AppModule {}
