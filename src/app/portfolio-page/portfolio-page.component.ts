import { Component } from '@angular/core';
import { PortfolioDetailEducationItem, PortfolioDetailExperienceItem } from '../portfolio-detail';
import { DorDetailComponent } from '../dor-detail/dor-detail.component';
import { DorIconComponent } from "../dor-icon/dor-icon.component";
import { DorSectionComponent } from '../dor-section/dor-section.component';
import { DorTimelineComponent } from "../dor-timeline/dor-timeline.component";

@Component({
  selector: 'app-portfolio-page',
  standalone: true,
  imports: [DorDetailComponent, DorIconComponent, DorSectionComponent, DorTimelineComponent],
  templateUrl: './portfolio-page.component.html',
  styleUrl: './portfolio-page.component.scss'
})
export class PortfolioPageComponent {
  detailVisible = false;
  
  experienceList: PortfolioDetailExperienceItem[] = [
    {
      id: "0", 
      field: "Desarrollador Frontend", 
      company: "Ártabro Tech", 
      from: "Julio 2023", 
      to: "Agosto 2024", 
      description: "Diseño, desarrollo y mantenimiento de una plataforma SaaS para facilitar el procesamiento de licitaciones públicas a nivel estatal.", 
      tasks: [
        "Manipulación y procesamiento de grandes cantidades de datos, asegurando la integridad y homogeneidad en su estructura.", 
        "Comunicación directa con clientes; toma de requisitos, resolución de incidencias, servicio de soporte, servicio de venta...", 
        "Implementación de gráficos y mapas a través de librerías de visualización como D3, Highcharts o jQWidgets; adaptando las funcionalidades a los requisitos de la aplicación.", 
        "Diseño de layouts y temas personalizados con CSS3.", 
        "Desarrollo de componentes personalizados ocn JavaScript.", 
        "Conexión con bases de datos no relacionales ( MongoDB ).", 
        "Soporte al equipo de desarrollo backend con la arquitectura de la base de datos ( BigQuery ) y el sistema ( Python + Flask ).", 
      ], 
    }, 
    {
      id: "1", 
      field: "Analista de Datos", 
      company: "Navantia Seanergies", 
      from: "Enero 2023", 
      to: "Junio 2023", 
      description: "Gestión y automatización de informes con Excel.", 
      tasks: [
        "Desarrollo y automatización de informes diarios con Visual Basic y Excel.", 
        "Presentación y exposición de iniciativas empresariales.", 
        "Gestión empresarial con SAP.", 
      ], 
    }, 
    {
      id: "2", 
      field: "Desarrollador Fullstack", 
      company: "Grupo Academia Postal", 
      from: "Agosto 2020", 
      to: "Octubre 2020",
      description: "Diseño y desarrollo de una aplicación web con dos perfiles. Un perfil de usuario, que puede subir archivos; y un perfil de administrador, que puede recibir y visualizar los CV.", 
      tasks: [
        "Frontend con Angular.", 
        "Backend con Node.js.", 
        "Bases de datos relacionales con MySQL.", 
      ], 
    }, 
    {
      id: "3", 
      field: "Diseñador Gráfico", 
      company: "Servicios Gráficos ASAP", 
      from: "Mayo 2018", 
      to: "Junio 2018", 
      description: "Diseños de distinta índole para empresas.", 
      tasks: [
        "Diseños vectoriales para cartelería con Adobe Illustrator.", 
        "Diseño de marca empresarial.", 
      ], 
    }, 
  ];

  educationList: PortfolioDetailEducationItem[] = [
    {
      id: "0", 
      degree: "Técnico Superior en Desarrollo de Aplicaciones Multiplataforma", 
      school: "CIFP Rodolfo Ucha Piñeiro", 
      year: "2023", 
      competencies: [
        "Desarrollo de interfaces y programación orientada a objetos.",
        "Desarrollo de aplicaciones móvil con Flutter.", 
        "Desarrollo de videojuegos 2D y 3D con Unity.", 
        "Bases de datos relacionales SQL.",  
      ], 
    }, 
    {
      id: "1", 
      degree: "Módulos de aprendizaje para el uso de IA", 
      school: "Proyecto AIM@VET ( Erasmus Eslovenia )", 
      year: "2023", 
      competencies: [
        "Programación de sensores y actuadores asociados a la robótica con Arduino y Python.", 
        "Entrenamiento de un modelo de Inteligencia Artificial con Python.", 
      ], 
    }, 
    {
      id: "2", 
      degree: "Desarrollo de Aplicaciones con Tecnologías Web ( IFCD0210 )", 
      school: "Grupo Academia Postal", 
      year: "2020", 
      competencies: [
        "Introducción a las tecnologías web con HTML5, CSS3, JavaScript.", 
        "Angular + Node.js.", 
      ], 
    }, 
    {
      id: "3", 
      degree: "Técnico Superior en Artes Plásticas y Diseño ( Ilustración )", 
      school: "EASD Pablo Picasso", 
      year: "2018", 
      competencies: [
        "Proyecto final: Diseño y desarrollo de la demo para un videojuego en Unity ( Nota 10 ).", 
      ], 
    }, 
  ];

  toggleDetail() {
    this.detailVisible = !this.detailVisible;
  }
}
