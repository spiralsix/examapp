import { CookieService } from 'angular2-cookie/services/cookies.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  
  userEmail = "";
  title = 'app works!';
  loggedIn:boolean = false;
  loggedInUser = null;
 
  constructor(private _cookieService:CookieService) {
  console.log("cookie? ",this._cookieService.get("userEmail"))
      this.userEmail = this._cookieService.get("userEmail")
  }

  loginHandler($event) {

        console.log("found email: ",$event.email)
        console.log("in AppComponent loginHandler ",$event.email)
        this.userEmail = $event.email;  
        this._cookieService.put("userEmail",$event.email)

        console.log("setCookie!r ",this._cookieService.get("userEmail"))
  
   }
}
