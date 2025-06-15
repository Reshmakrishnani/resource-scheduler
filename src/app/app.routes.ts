import { Routes } from '@angular/router';
import { DayViewComponent } from './scheduler/day-view/day-view.component';

export const routes: Routes = [
  {
  path:'',
  redirectTo:'scheduler',
  pathMatch:'full'
},
{
  path:'',
  component:DayViewComponent
}
];
