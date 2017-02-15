import {Injectable} from '@angular/core';
import {Http,Headers,RequestOptions}       from '@angular/http';
import {Observable}     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Video} from './details/video';
import 'rxjs/add/operator/catch';

@Injectable()
export class VideosService {

  constructor(private http: Http) {
    console.log("VideoService: init")
  }

  findAll(): Observable<Video[]> {
    console.log('VideosService: here before call to api');
    //{'Content-Type': 'application/json','Authorization':sessionStorage.getItem("authToken")}
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    headers.append('Access-Control-Allow-Headers','Authorization');
    headers.append('Authorization','eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjpbIlJPTEVfVVNFUiIsIlJPTEVfQURNSU4iXSwiaXNzIjoiTU9WSUVGTElYIiwiaWQiOiIyMGE3NWE0Ny0zYWUxLTQyYTctYWIxOS03NWQxNjJhZWNmYjYiLCJ1c2VybmFtZSI6Imp5byJ9.cZI9jRNhb0zx_BFrT58DnJ6RQGAoEkWLmNCIy5WrQ3w');
    let options = new RequestOptions({headers: headers});
    return this.http
      .get('http://localhost:8080/module-api/api/videos',{headers: headers})
      .map(response => response.json())
      .catch(error => Observable.throw(error.statusText));
  }


  findMovies(): Observable<Video[]> {
    console.log('VideosService: here before call to api');
    return this.http
      .get('http://localhost:8080/module-api/api/videos/movies')
      .map(response => response.json())
      .catch(error => Observable.throw(error.statusText));
  }


  findTVShows(): Observable<Video[]> {
    console.log('VideosService: here before call to api');
    return this.http
      .get('http://localhost:8080/module-api/api/videos/series')
      .map(response => response.json())
      .catch(error => Observable.throw(error.statusText));
  }

  findTopRatedMovies(): Observable<Video[]> {
    console.log('VideosService: here before call to api');
    return this.http.get('http://localhost:8080/module-api/api/videos/movies/top-rated/')
      .map(response => response.json())
      .catch(error => Observable.throw(error.statusText));
  }

  findTopRatedTVShows(): Observable<Video[]> {
    console.log('VideosService: here before call to api');
    return this.http.get('http://localhost:8080/module-api/api/videos/series/top-rated/')
      .map(response => response.json())
      .catch(error => Observable.throw(error.statusText));
  }

  sortAllVideosByImdbRating(): Observable<Video[]> {
    console.log('VideosService: here before call to sort');
    return this.http.get('http://localhost:8080/module-api/api/videos/sort-by-imdb-rating')
      .map(response => response.json())
      .catch(error => Observable.throw(error.statusText));
  }

  sortMoviesByImdbRating(): Observable<Video[]> {
    console.log('VideosService: here before call to movies sort');
    return this.http.get('http://localhost:8080/module-api/api/videos/movies/sort-by-imdb-rating')
      .map(response => response.json())
      .catch(error => Observable.throw(error.statusText));
  }

  sortSeriesByImdbRating(): Observable<Video[]> {
    console.log('VideosService: here before call to series sort');
    return this.http.get('http://localhost:8080/module-api/api/videos/series/sort-by-imdb-rating')
      .map(response => response.json())
      .catch(error => Observable.throw(error.statusText));
  }


}
