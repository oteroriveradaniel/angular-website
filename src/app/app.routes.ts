import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PortfolioPageComponent } from './portfolio-page/portfolio-page.component';
import { DevPageComponent } from './dev-page/dev-page.component';

export const routes: Routes = [
  { path: "", component: LandingPageComponent }, 
  { path: "portfolio", component: PortfolioPageComponent }, 
  { path: "dev", component: DevPageComponent }, 
];
