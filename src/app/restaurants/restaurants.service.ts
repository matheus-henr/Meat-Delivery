import { Injectable} from '@angular/core';

import { Restaurant } from './restaurant/restaurant.model'
import { MEAT_API } from '../app.api'
import { ErrorHandler } from '../app.error-handler'

import { Http, HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

@Injectable()
export class RestaurantsService {


  constructor(private http: Http) { }

  rest(): Observable<Restaurant[]>{
    return this.http.get(`${MEAT_API}/restaurants`)
    .map(response => response.json())
    ._catch(ErrorHandler.handlerError)   
  }

  restaurant(id: string): Observable<Restaurant>{
    return this.http.get(`${MEAT_API}/restaurants/${id}`)
    .map(response => response.json())
    ._catch(ErrorHandler.handlerError) 
  }

}
