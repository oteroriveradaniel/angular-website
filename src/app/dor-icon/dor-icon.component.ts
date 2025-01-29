import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dor-icon',
  standalone: true,
  imports: [],
  templateUrl: './dor-icon.component.html',
  styleUrl: './dor-icon.component.scss'
})
export class DorIconComponent {
  @Input() src: string = "";
  @Input() text: string = "";
}
