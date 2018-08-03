import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import 'rxjs/add/operator/toPromise';
import { Location, Review } from './location';
import { AuthService } from './auth.service';

import { environment } from '../environments/environment';

@Injectable()
export class Loc8rDataService {

  constructor(
    private http: HttpClient,
    private auth: AuthService
  ) { }

  private apiBaseUrl = environment.apiUrl;
  //private apiBaseUrl =  'http://localhost:3000/api';
  //private apiBaseUrl = 'https://getting-mean2e.herokuapp.com/api';


  public getLocations(lat: number, lng: number): Promise<Location[]> {
    const maxDistance: number = 50000;
    const url: string =
      `${this.apiBaseUrl}/locations?lng=${lng}&lat=${lat}&maxDistance=${maxDistance}
      `;
    return this.http
      .get(url)
      .toPromise()
      .then(response => response as Location[])
      .catch(this.handleError);
  }

  public getLocationById(locationId: string): Promise<Location> {
    const url: string =
      `${this.apiBaseUrl}/locations/${locationId}`;
    return this.http
      .get(url)
      .toPromise()
      .then(response => response as Location)
      .catch(this.handleError);
  }

  public addReviewByLocationId(locationId: string, formData: Review, token: string): Promise<Review> {
    const url: string = `${this.apiBaseUrl}/locations/${locationId}/reviews`;
    
    const options = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.auth.getToken()}`
      })
    };
    
    return this.http
      .post(url, formData, options)
      .toPromise()
      .then(response => response as Review)
      .catch(this.handleError)
  }

  private handleError(error: any): Promise<any> {
    console.error('Something has gone wrong', error);
    return Promise.reject(error.message || error);
  }
}
