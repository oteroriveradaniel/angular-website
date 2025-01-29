import { Component } from '@angular/core';

@Component({
  selector: 'app-dor-detail',
  standalone: true,
  imports: [],
  templateUrl: './dor-detail.component.html',
  styleUrl: './dor-detail.component.scss'
})
export class DorDetailComponent {
  isDetailVisible = false;

  toggleDetail() {
    this.isDetailVisible = !this.isDetailVisible;
  }
}
