import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HomePageModule } from './home-page/home-page.module';
import { HomeModule } from './home/home.module';

@NgModule({
	declarations: [
		AppComponent,
	],
	imports: [
		BrowserModule, 
		HomePageModule,
		HomeModule,
	],
	providers: [],
	bootstrap: [AppComponent]
	})
export class AppModule {}
