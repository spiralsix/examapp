import { User } from './../../user';
import { UserService } from './../../user.service';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { CookieService } from 'angular2-cookie/services';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  @Output() loginEvent = new EventEmitter();
  @Input() userEmail:String;
  errorMessage:string = "err";
  
  
  constructor(private _cookieService:CookieService, private _userService:UserService) { }

  ngOnInit() {
    this._cookieService.put("cookiekey","cookieValue",{})
    this.userEmail = this._cookieService.get("userEmail");

    console.dir(this._cookieService.get("userEmail"))
  }

  getCookie(key: string){
    return this._cookieService.get(key);
  }

  submitHandler(email:string) {
    this.errorMessage = "";
    console.log("email",email);

    this._userService.lookUpUserByEmail(email)
      .then((response) => {
        if(response) {
          //console.log("email",response["user"]["email"]);
          if(response["user"]) {
            this.userEmail = response["user"]["email"];
            if(response["user"]) {
              this.loginEvent.emit({email:this.userEmail})
              console.log("log in sucess");
            }
            else {
              this.errorMessage = "user obj returned from login doesn't have an email.  is this possible?";
            }
          }
          else {
            console.log("user not found, response is: "+response)
             this.errorMessage = "email not found";
          }
        }
        else {
          console.log("reponse was null? "+response)
        }
        
        //console.log("RETURN FROM lookupuerbyemail: ", response);
      });
  }
}
