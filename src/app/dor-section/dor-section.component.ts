import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dor-section',
  standalone: true,
  imports: [],
  templateUrl: './dor-section.component.html',
  styleUrl: './dor-section.component.scss'
})
export class DorSectionComponent {
  @Input() title: string = "";
  @Input() subtitle: string = "";
}
