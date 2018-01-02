import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Location } from './home-list/home-list.component';

@Injectable()
export class Loc8rDataService {

  constructor(private http: Http) { }
  
  private apiBaseUrl = 'http://localhost:3000/api';
  
  public getLocations(): Promise<Location[]> {
    const lng: number = -122.500545;
    const lat: number = 47.335534;
    const maxDistance: number = 20000;
    const url: string = `${this.apiBaseUrl}/locations?lng=${lng}&lat=${lat}&maxDistance=${maxDistance}`;
    return this.http
      .get(url)
      .toPromise()
      .then(response => response.json() as Location[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Something has gone wrong', error);
    return Promise.reject(error.message || error);
  }
  
}
