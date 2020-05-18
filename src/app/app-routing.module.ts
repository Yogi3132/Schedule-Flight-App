import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FindbyflightnumberScheduleComponent } from './findbyflightnumber-schedule/findbyflightnumber-schedule.component';
import { DeleteScheduledflightComponent } from './delete-scheduledflight/delete-scheduledflight.component';
import { AddScheduledflightComponent } from './add-scheduledflight/add-scheduledflight.component';


const routes: Routes = [{
  path:'add-scheduledflight',
  component: AddScheduledflightComponent
}
,
{
  path:'delete-scheduledflight',
  component:DeleteScheduledflightComponent
}
,
{
  path:'findbyflightnumber-schedule',
  component:FindbyflightnumberScheduleComponent
}
,
{
  path:'modify-scheduledflight',
  component:FindbyflightnumberScheduleComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
