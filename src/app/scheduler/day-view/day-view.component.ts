import { resources, appointment } from './../common-scheduler.interface';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TimeColumnComponent } from '../time-column/time-column.component';
import { ResourceColumnComponent } from '../resource-column/resource-column.component';
import { AvatarModule } from 'primeng/avatar';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-day-view',
  standalone: true,
  imports: [CommonModule,TimeColumnComponent, ResourceColumnComponent, AvatarModule, ScrollPanelModule,ButtonModule],
  templateUrl: './day-view.component.html',
  styleUrl: './day-view.component.scss'
})
export class DayViewComponent {

 startHour = 9;   // Start of day (e.g., 9 AM)
endHour = 18;    // End of day (e.g., 6 PM)
slotInterval = 15; // Sub-time divisions (e.g., 15-minute slots)

resource=resources;
appointment=appointment;

getAppointments(data:any):any[]{
  let res = appointment.filter(a => a.resourceId === data.id);
 return res;
}
}
