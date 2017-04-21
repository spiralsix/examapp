import { Http, Request,  Response, RequestOptions, Headers } from '@angular/http';
import { User } from './user';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Observable } from 'rxjs/Observable';




@Injectable()
export class UserService {
  users:User[] = []
  mode:String = "new";
  constructor(private http:Http) { }
 private headers = new Headers({'Content-Type': 'application/json'});

  getUsers(): Promise<User[]> {
    return this.http.get("/users")
      .toPromise()
      .then(response => response.json().data as User[])
      .catch(this.handleError);
  }

  lookUpUserByEmail(email:String):Promise<Object> {
    const url = '/user/'+email;
    return this.http.get(url, {headers: this.headers})
      .toPromise()
      .then((response) => response.json())
      .catch(this.handleError);
     
  }

  updateUser(user: User): Promise<User> {
    const url = '/users';
    return this.http
      .put(url, JSON.stringify(user), {headers: this.headers})
      .toPromise()
      .then(() => user)
      .catch(this.handleError);
  }

  createUser(user: User): Promise<User> {
    const url = '/users/new';
    return this.http
      .post(url, JSON.stringify(user), {headers: this.headers})
      .toPromise()
      .then(() => user)
      .catch(this.handleError);
  }

  deleteUser(user: User): Promise<User> {
    const url = '/users/'+user._id;
    console.log(user)
    console.log(url)
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => user)
      .catch(this.handleError);
  }


  private extractData(res: Response) {
    let body = res.json();
   
    return body.data || { };
  }

  private handleError (error: Response | any) {
    console.log("handleError",error);
     // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
     console.log("body",body);
     const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      console.log("error",error);
      errMsg = error.message ? error.message : error.toString();
    }
    console.log(errMsg);
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
