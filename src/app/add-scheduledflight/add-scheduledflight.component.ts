/**import { Component, OnInit } from '@angular/core';
import { ScheduledFlight } from '../model/scheduledflight';

@Component({
  selector: 'app-add-scheduledflight',
  templateUrl: './add-scheduledflight.component.html',
  styleUrls: ['./add-scheduledflight.component.css']
})
export class AddScheduledflightComponent implements OnInit {
 

  constructor() {
}



added:ScheduledFlight=null;

  ngOnInit(): void {
}


addSchedule(form:any){
  let details=form.value;
  let flightnumber=details.flightnumber
  let sourceairport=details.sourceairport;
  let destinationairport=details.destinationairport;
  let departuretime=details.departuretime;
  let arrivaltime=details.arrivaltime;
  let availableseats=details.availableseats;
  let schedule=new ScheduledFlight(flightnumber,sourceairport,destinationairport,departuretime,arrivaltime,availableseats);
  this.added=schedule;
  form.reset();

  
}



}
*/


import { Component, OnInit } from '@angular/core';
import { ScheduledFlight } from '../model/scheduledflight';
import { ScheduledFlightService } from '../services/scheduledflightservice';

@Component({
  selector: 'app-add-scheduledflight',
  templateUrl: './add-scheduledflight.component.html',
  styleUrls: ['./add-scheduledflight.component.css']
})
export class AddScheduledflightComponent implements OnInit {

  service:ScheduledFlightService;
 

  constructor(service:ScheduledFlightService) {
    this.service=service;
}


added:ScheduledFlight=null;

  ngOnInit(): void {
}


addSchedule(form:any){
  let details=form.value;
  let flightnumber=details.flightnumber
  let sourceairport=details.sourceairport;
  let destinationairport=details.destinationairport;
  let departuretime=details.departuretime;
  let arrivaltime=details.arrivaltime;
  let availableseats=details.availableseats;
  let schedules=new ScheduledFlight(flightnumber,sourceairport,destinationairport,departuretime,arrivaltime,availableseats);
  this.added=schedules;
  
  
  
  let result=this.service.addSchedule(this.added); 
  result.subscribe((schedule:ScheduledFlight)=>{
    this.added=schedule;
  },
  err=>{
  console.log("err="+err);
  } );
  form.reset();
  
}

  
}




