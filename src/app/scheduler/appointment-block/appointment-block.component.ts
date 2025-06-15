import { Component, Input } from '@angular/core';
import { Appointment } from '../common-scheduler.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-appointment-block',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './appointment-block.component.html',
  styleUrl: './appointment-block.component.scss'
})
export class AppointmentBlockComponent {
 @Input() title!: string;
  @Input() startTime!: string;
  @Input() endTime!: string;



}
