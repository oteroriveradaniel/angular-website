import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PortfolioPageComponent } from './portfolio-page/portfolio-page.component';
import { DevPageComponent } from './dev-page/dev-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DorFormComponent } from './dor-form/dor-form.component';
import { DorBarchartComponent } from './dor-barchart/dor-barchart.component';
import { DorGalleryComponent } from './dor-gallery/dor-gallery.component';
import { DorTableComponent } from './dor-table/dor-table.component';

export const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" }, 
  { path: "home", component: LandingPageComponent, title: "Inicio | Daniel Otero Rivera" }, 
  { path: "portfolio", component: PortfolioPageComponent, title: "Portfolio | Daniel Otero Rivera" }, 
  { 
    path: "dev", 
    component: DevPageComponent, 
    title: "Sandbox | Daniel Otero Rivera", 
    children: [
      { path: "form", component: DorFormComponent}, 
      { path: "barchart", component: DorBarchartComponent}, 
      { path: "gallery", component: DorGalleryComponent}, 
      { path: "table", component: DorTableComponent}, 
      // { path: "kanban", component: }, 
    ]
   }, 
  { path: '**', component: NotFoundComponent }, 
];
