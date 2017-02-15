import {Injectable} from '@angular/core';
import {Http, Response}       from '@angular/http';
import {Observable}     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Video} from './details/video';
import 'rxjs/add/operator/catch';


@Injectable()
export class DetailsService {

  constructor(private http: Http) { }

  getMovieById(id:string): Observable<Video> {
    console.log('DetailsService: here before call to api');
    console.log('searching for movie with id: ' + id)
    return this.http
      .get('http://localhost:8080/module-api/api/videos/' + id)
      .map(response => this.handleResponse(response))
      .catch(error => Observable.throw(error.statusText));
  }
  private handleResponse(response: Response) {
    console.log('Processing response from getById...');
    console.log(response.json());
    console.log('Returning response from getById...');
    return response.json();
  }

}
