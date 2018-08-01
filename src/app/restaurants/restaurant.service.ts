import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch'

import { RestaurantModel } from './restaurant/restaurant.model';
import { ErrorHandler } from '../app.handle-errors';

@Injectable()
export class RestaurantService {

  constructor(private http: Http) { }

  restaurants(id?: string, type?: string): Observable<RestaurantModel[]> {
    return this.http.get(this.getURL(id, type))
      .map(response => response.json())
      .catch(ErrorHandler.handle)
  }

  getURL(id: string, type: string){
    let url: string;
    if(id){
      url = `http://localhost:3000/restaurants/${id}`
      if(type === "review"){
        url += "/reviews";
      }
      else if (type === "menu"){
        url += "/menu";
      }
    } else {
      url = `http://localhost:3000/restaurants`;
    }
    return url;
  }

}
