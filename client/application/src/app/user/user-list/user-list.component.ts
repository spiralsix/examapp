import { User } from './../../user';
import { Component, OnInit, Input , Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  errorMessage:any = "";

  @Input() users:User[];
  @Output() showEditEvent = new EventEmitter();
  @Output() deleteEvent = new EventEmitter();
 
  constructor() { }

  ngOnInit() {
      console.log("users",this.users);
  }

  deleteUser(user) {
    console.log("UserListComponent => deleteUser: user: ",user);
    this.deleteEvent.emit({user:user});
  }

  showEdit(user) {
   console.log("UserListComponent => showEdit: user: ",user);
   console.log({ component:"edit", value:true, user:user })
   this.showEditEvent.emit({ component:"edit", value:true, user:user });
  }

}
