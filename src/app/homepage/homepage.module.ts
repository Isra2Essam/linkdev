import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './homepage-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import { NewsComponent } from './news/news.component';
import { NewsCardComponent } from './news/news-card/news-card.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BannerComponent } from './banner/banner.component';
import { FooterComponent } from './footer/footer.component';
import { ThingsComponent } from './things/things.component';


@NgModule({
  declarations: [
    HomepageComponent,
    NewsComponent,
    NewsCardComponent,
    NavbarComponent,
    BannerComponent,
    FooterComponent,
    ThingsComponent
  ],
  imports: [
    CommonModule,
    HomepageRoutingModule
  ],
  exports: [
    HomepageComponent
  ]
})
export class HomepageModule { }
