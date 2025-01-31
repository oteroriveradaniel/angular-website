import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

interface ComponentLink {
  title: string; 
  path: string;   
}

@Component({
  selector: 'app-dor-horizontal-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './dor-horizontal-list.component.html',
  styleUrl: './dor-horizontal-list.component.scss'
})
export class DorHorizontalListComponent {
  @Input() items: ComponentLink[] = [];
}
