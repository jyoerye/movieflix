import {Injectable} from '@angular/core';
import {Http,Headers,RequestOptions,URLSearchParams }       from '@angular/http';
import {Observable}     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Injectable()
export class LoginService {

  constructor(private http: Http) { }

  authenticateUser(username:string,password:string)
  {
    console.log('JYOOOauthenticateUser: here before call to user comments api'+"movies ");
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    let params: URLSearchParams = new URLSearchParams();

    params.set("userName", username);
    params.set("password", password);
    options.search = params;

    return this.http.get('http://localhost:8080/module-api/api/users/login',options)
      .map(this.saveToken)
      .catch(error => Observable.throw(error.statusText));
  }


  saveToken(response)
  {
    console.log("token");
    console.log(response.text());
    sessionStorage.setItem("authToken",response.text());
  }
}
