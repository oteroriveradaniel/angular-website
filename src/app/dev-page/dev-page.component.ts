import { Component } from '@angular/core';
import { DorHorizontalListComponent } from "../dor-horizontal-list/dor-horizontal-list.component";
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dev-page',
  standalone: true,
  imports: [DorHorizontalListComponent, RouterOutlet],
  templateUrl: './dev-page.component.html',
  styleUrl: './dev-page.component.scss'
})
export class DevPageComponent {
  componentList = [
    {title: "Formulario", path: "form", }, 
    {title: "Gráfico de Barras", path: "barchart", }, 
    {title: "Galería", path: "gallery", }, 
    {title: "Tabla", path: "table", }, 
    // "Kanban", 
  ];
}
