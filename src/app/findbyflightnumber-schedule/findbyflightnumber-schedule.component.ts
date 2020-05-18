/**import { Component, OnInit } from '@angular/core';
import { ScheduledFlight } from '../model/scheduledflight';

@Component({
  selector: 'app-findbyflightnumber-schedule',
  templateUrl: './findbyflightnumber-schedule.component.html',
  styleUrls: ['./findbyflightnumber-schedule.component.css']
})
export class FindbyflightnumberScheduleComponent implements OnInit {

  scheduledFlights:ScheduledFlight[]=[];

  constructor() {}
    
    fetchByFlightNumber(flightnumber:number):void{
    let schedule1=new ScheduledFlight(111,"Raja Bhoj","Indira Gandhi",new Date("23-01-1998"),new Date("25-02-1999"),500);
     let scheduledFlights=[
       schedule1
     ];
     this.scheduledFlights=scheduledFlights;
        }

  ngOnInit(): void {
  }

  fetchedSchedule:ScheduledFlight=null;
  submitFindFlight(form:any){
    let details =form.value;
    let flightnumber=details.flightnumber;
    this.fetchByFlightNumber(flightnumber);
  }


}
*/

import { Component, OnInit } from '@angular/core';
import { ScheduledFlight } from '../model/scheduledflight';
import { ScheduledFlightService } from '../services/scheduledflightservice';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-findbyflightnumber-schedule',
  templateUrl: './findbyflightnumber-schedule.component.html',
  styleUrls: ['./findbyflightnumber-schedule.component.css']
})
export class FindbyflightnumberScheduleComponent implements OnInit {

  service: ScheduledFlightService;

  foundSchedule: ScheduledFlight = null;
  foundStatus = null;

  constructor(service: ScheduledFlightService) {
    this.service = service;
  }

  ngOnInit(): void {
  }



  fetchByFlightNumber(form: any): void {
    let details = form.value;
    let flightnumber = details.flightnumber;
    let fetched: Observable<ScheduledFlight> = this.service.fetchByFlightNumber(flightnumber);
    fetched.subscribe(
      schedule => {
        this.foundSchedule = schedule;
        this.foundStatus = "found";
      },
      err => {
        this.foundStatus = "notfound";
        console.log("err while fetching schedules=" + err);
      }
    );

  }
}
