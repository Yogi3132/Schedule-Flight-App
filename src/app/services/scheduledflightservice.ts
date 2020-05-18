import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ScheduledFlight } from '../model/scheduledflight';
import { Observable, observable } from 'rxjs';

@Injectable()
export class ScheduledFlightService{
  client:HttpClient ;
  constructor(client:HttpClient ){
  this.client=client;
  }


  baseScheduledFlightUrl="http://localhost:8086/scheduledflights";



  addSchedule(sch:ScheduledFlight): Observable<ScheduledFlight>{
    let url=this.baseScheduledFlightUrl+"/add";
    let result:Observable<ScheduledFlight>= this.client.post<ScheduledFlight>(url,sch);
    return result;
    }


    fetchByFlightNumber(flightnumber:number):Observable<ScheduledFlight>{
        let url=this. baseScheduledFlightUrl+'/get/'+flightnumber;
        let observable:Observable<ScheduledFlight> =this.client.get<ScheduledFlight>(url);
        return observable;  
      }



    fetchAllSchedule():Observable<ScheduledFlight[]>{
    let url=this. baseScheduledFlightUrl;
    let observable:Observable<ScheduledFlight[]> =this.client.get<ScheduledFlight[]>(url);
    return observable;
  }




  deleteScheduleByFlightNumber(flightnumber:number){
    let url=this.baseScheduledFlightUrl+"/delete/"+flightnumber;
    let result:Observable<boolean>=this.client.delete<boolean>(url);
    return result;
  }


}