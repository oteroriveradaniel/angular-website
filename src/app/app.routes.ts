import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PortfolioPageComponent } from './portfolio-page/portfolio-page.component';
import { DevPageComponent } from './dev-page/dev-page.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" }, 
  { path: "home", component: LandingPageComponent, title: "Inicio | Daniel Otero Rivera" }, 
  { path: "portfolio", component: PortfolioPageComponent, title: "Portfolio | Daniel Otero Rivera" }, 
  { path: "dev", component: DevPageComponent, title: "Sandbox | Daniel Otero Rivera" }, 
  { path: '**', component: NotFoundComponent }, 
];
