import { Component, Input } from '@angular/core';
import { Appointment, Resource } from '../common-scheduler.interface';
import { CommonModule } from '@angular/common';
import { AppointmentBlockComponent } from '../appointment-block/appointment-block.component';
import { CurrentTimeIndicatorComponent } from '../current-time-indicator/current-time-indicator.component';

@Component({
  selector: 'app-resource-column',
  standalone: true,
  imports: [CommonModule,
    AppointmentBlockComponent,
    CurrentTimeIndicatorComponent
  ],
  templateUrl: './resource-column.component.html',
  styleUrl: './resource-column.component.scss',
})
export class ResourceColumnComponent {
 @Input() resource!: Resource;
  @Input() appointment:any[]=[];
  @Input() startHour:number=9;
   @Input() endHour:number=10;
   slots = new Array(this.endHour - this.startHour);
   constructor(){
    console.log(this.appointment)
   }
   getTopOffset(time: string): number {
    const [h, m] = time.split(':').map(Number);
    const totalMinutes = (h - this.startHour) * 60 + m;
    return totalMinutes * 1.5; // 1.5px per minute = 90px per hour
  }

  getHeight(start: string, end: string): number {
    const [sh, sm] = start.split(':').map(Number);
    const [eh, em] = end.split(':').map(Number);
    const duration = (eh * 60 + em) - (sh * 60 + sm);
    return duration * 1.5;
  }
}

