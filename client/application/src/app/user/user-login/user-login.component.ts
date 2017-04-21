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
    console.log("email",email);
    this._userService.lookUpUserByEmail(email)
      .then((response) => {
        if(response) {
          console.log("email",response["user"]["email"]);
          this.userEmail = response["user"]["email"];
          console.log(this.userEmail,this.userEmail,this.userEmail);
          this.loginEvent.emit({email:this.userEmail})
        }
        
        //console.log("RETURN FROM lookupuerbyemail: ", response);
      });
  }
}
