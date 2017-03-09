import {Injectable} from '@angular/core';
import {Http,Headers,RequestOptions,URLSearchParams }       from '@angular/http';
import {Observable}     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Video} from './details/video';
import 'rxjs/Rx';


@Injectable()
export class RatingService {

  constructor(private http: Http) {
    console.log("RatingService: init")
  }

  getRatingByUserName(moviedId:string,userName:string)
  {
    console.log('getRatingByUserName: here before call to user rating api'+"  username " +userName + "movies "+moviedId);
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    let params: URLSearchParams = new URLSearchParams();
    params.set("userName", userName);
    params.set("movieId", moviedId);
    options.search = params;

    return this.http.get('http://localhost:8080/module-api/api/user-ratings/get-rating',options)
      .map(response => response.json().userRating)
      .catch(error => Observable.throw(error.statusText));
  }

  saveUserRating(id:string , ratingValue: number): Observable<Video[]> {
    console.log('SaveUserRating: here before call to user rating api'+ratingValue);
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    let params: URLSearchParams = new URLSearchParams();
    params.set("userName", "jacky");
    params.set("movieId", id);
    params.set("rating",ratingValue.toString());
    options.search = params;

    return this.http.post('http://localhost:8080/module-api/api/user-ratings',{},options)
      .map(response => response.json())
      .catch(error => Observable.throw(error.statusText));
  }

}
