import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dor-timeline',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './dor-timeline.component.html',
  styleUrl: './dor-timeline.component.scss'
})
export class DorTimelineComponent {
  currentDate = Date.now();
}
