import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SharedModule } from '../../shared/shared.module';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';


@NgModule({
  declarations: [
    HomePageComponent,
    HeroSectionComponent,
    LandingPageComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
