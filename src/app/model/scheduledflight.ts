export class ScheduledFlight{

    flightNumber:number;
    sourceAirport:string;
    destinationAirport:string;
    departureTime:Date;
    arrivalTime:Date;
    availableSeats:number;



constructor(flightNumber:number,sourceAirport:string,destinationAirport:string,departureTime:Date,arrivalTime:Date,availableSeats:number){
        this.flightNumber=flightNumber;
        this.sourceAirport=sourceAirport;
        this.destinationAirport=destinationAirport;
        this.departureTime=departureTime;
        this.arrivalTime=arrivalTime;
        this.availableSeats=availableSeats;
    
    }

}