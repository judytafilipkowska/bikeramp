import { Injectable } from '@nestjs/common';
import { Trip } from './trip.model';

@Injectable()
export class TripService {
  private trip: Trip[] = [];

  addNewTrip( 
    startAddress: string,
    destinationAddress: string, 
    price: number, 
    date: string ) {
        const tripId = 
    }
}
