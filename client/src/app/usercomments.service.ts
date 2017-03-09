import {Injectable} from '@angular/core';
import {Http,Headers,RequestOptions,URLSearchParams }       from '@angular/http';
import {Observable}     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Video} from './details/video';
import 'rxjs/Rx';



@Injectable()
export class UserCommentsService {

  constructor(private http: Http) { }


  saveUserComments(id:string ,userName:string, comments: string): Observable<Video[]> {
    console.log('SaveUserRating: here before call to user rating api'+"id "+id +"user "+userName +"comments "+comments);
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    let params: URLSearchParams = new URLSearchParams();
    params.set("userName", userName);
    params.set("movieId", id);
    params.set("comments",comments);
    options.search = params;

    return this.http.post('http://localhost:8080/module-api/api/user-comments',{},options)
      .map(response => response.json())
      .catch(error => Observable.throw(error.statusText));
  }


  getCommentsByVideoId(videoId:string)
  {
    console.log('JYOOOgetCommentsByMovieId: here before call to user comments api'+"movies "+videoId);
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    let params: URLSearchParams = new URLSearchParams();

    params.set("videoId", videoId);
    options.search = params;

    return this.http.get('http://localhost:8080/module-api/api/user-comments/get-comments-by-movieid',options)
      .map(response => response.json())
      .catch(error => Observable.throw(error.statusText));
  }

}
