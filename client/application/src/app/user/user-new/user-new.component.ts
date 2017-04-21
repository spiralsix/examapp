import { UserService } from './../../user.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from './../../user';

@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.css']
})
export class UserNewComponent implements OnInit {
  @Output() cancelCreateEvent = new EventEmitter();
  @Output() userCreateEvent = new EventEmitter();
 
  newUser:User = new User();
  constructor( ) { }

  ngOnInit() {
  }

  createUser() {
    console.log("UserNewComponent => createUser: ",this.newUser)
    this.userCreateEvent.emit({user:this.newUser})
   }
   cancel() {
     this.cancelCreateEvent.emit({component:"create",value:false});
   }
}
