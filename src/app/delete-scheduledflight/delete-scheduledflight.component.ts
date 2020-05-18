import { Component, OnInit } from '@angular/core';
import { ScheduledFlight } from '../model/scheduledflight';
import { ScheduledFlightService } from '../services/scheduledflightservice';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-delete-scheduledflight',
  templateUrl: './delete-scheduledflight.component.html',
  styleUrls: ['./delete-scheduledflight.component.css']
})
export class DeleteScheduledflightComponent implements OnInit {


  schedules:ScheduledFlight[]=[];

  service:ScheduledFlightService;

  orderByField:string=null;

  constructor(service:ScheduledFlightService) {
    this.service=service;

    let observable:Observable<ScheduledFlight[]>=this.service.fetchAllSchedule();
    observable.subscribe(
      schs=>{
        this.schedules=schs;
       console.log("inside success callback ="+this.schedules.length);
      },
      err=>console.log(err)
      );
   }

  ngOnInit(): void {
  }



  removeScheduleByFlightNumber(flightnumber:number){
    let result:Observable<boolean>=this.service.deleteScheduleByFlightNumber(flightnumber);
    result.subscribe(sch=>{
        this.removeLocalSchedule(flightnumber);
    },err=>{
     console.log("err in deleting="+err);
    })
      }



  removeLocalSchedule(flightnumber:number){
  let foundIndex=-1;
  for(let i=0;i<this.schedules.length;i++){
    let sch=this.schedules[i];
    if(sch.flightNumber===flightnumber){
      foundIndex=i;
      break;
    }
  }
  if(foundIndex<0){
    return;
  }
  this.schedules.splice(foundIndex,1);
}


}
