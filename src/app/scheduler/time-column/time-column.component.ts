import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-time-column',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './time-column.component.html',
  styleUrl: './time-column.component.scss',
})
export class TimeColumnComponent {
 @Input() startHour: number = 9;
  @Input() endHour: number = 18;
  constructor() {
  }

  get Times(): string[] {
    let result = [];
    for (let h = this.startHour; h < this.endHour; h++) {
     result.push({ hour: h, display: new Date(0, 0, 0, h).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) });
    }

    return result;
  }
}
