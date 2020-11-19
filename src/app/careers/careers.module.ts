import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CareersComponent } from './careers.component';
import { BannerComponent } from './banner/banner.component';
import { FormPartComponent } from './form-part/form-part.component';
import { OurBestInternComponent } from './our-best-intern/our-best-intern.component';
import { HomeModule } from '../home/home.module';

import { IvyCarouselModule } from 'angular-responsive-carousel';


@NgModule({
  declarations: [
      CareersComponent,
      BannerComponent,
      FormPartComponent,
      OurBestInternComponent,
    ],
    imports: [
      CommonModule,
      HomeModule,
      IvyCarouselModule,
    ],
    exports: [
        CareersComponent,
    ]
})
export class CareersModule { }
