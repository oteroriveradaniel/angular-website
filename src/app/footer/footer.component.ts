import { Component } from '@angular/core';
import { DorIconComponent } from "../dor-icon/dor-icon.component";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [DorIconComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
