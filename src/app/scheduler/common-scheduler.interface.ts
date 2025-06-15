export interface Appointment {
  resourceId: string;
  type: 'booked' | 'unavailable';
  start: string;
  end: string;
}

export interface Resource {
  id: string;
  name: string;
}

export const resources: Resource[] = [
  { id: 'r1', name: 'Alice' },
  { id: 'r2', name: 'Bob' },
];

export const appointment: Appointment[] = [
  { resourceId: 'r1', type: 'booked', start: '2025-06-14T09:02:00', end: '2025-06-14T09:13:00' },
  { resourceId: 'r1', type: 'unavailable', start: '2025-06-14T12:00:00', end: '2025-06-14T12:45:00' },
  { resourceId: 'r2', type: 'booked', start: '2025-06-14T10:45:00', end: '2025-06-14T11:30:00' },
];
