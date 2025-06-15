import { CommonModule } from '@angular/common';

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-current-time-indicator',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './current-time-indicator.component.html',
  styleUrl: './current-time-indicator.component.scss',
})
export class CurrentTimeIndicatorComponent implements OnInit {
 @Input() startHour!: number;
  @Input() endHour!: number;
 currentTime: string = '';
  offsetTop: number | null = null;
  top: number = -1;
   totalMinutes = 0;
  ngOnInit(): void {
   if (this.startHour == null || this.endHour == null) {
      console.warn('Missing startHour or endHour input.');
      return;
    }
    //  if (!this.) return;

    this.updateTime();
  // setInterval(() => this.updateTime(), 6000);
  }
  updateTime() {
    const nowDate = new Date();
        this.totalMinutes = (this.endHour - this.startHour) * 60;

   const currentMinutes = nowDate.getHours() * 60 + nowDate.getMinutes();
    const startMinutes = this.startHour * 60;

    const relativeMinutes = currentMinutes - startMinutes;

    if (relativeMinutes < 0 || relativeMinutes > this.totalMinutes) {
      this.offsetTop = null; // hide
    } else {
      const minuteHeight = 20; // adjust based on CSS row height
      this.offsetTop = relativeMinutes * minuteHeight;
      this.currentTime = nowDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }
  }
}
