import { Component, OnInit } from '@angular/core';
import { ScheduledFlightService } from '../services/scheduledflightservice';
import { ScheduledFlight } from '../model/scheduledflight';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-modify-scheduledflight',
  templateUrl: './modify-scheduledflight.component.html',
  styleUrls: ['./modify-scheduledflight.component.css']
})
export class ModifyScheduledflightComponent implements OnInit {

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