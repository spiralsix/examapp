import { Http, RequestOptions, Headers } from '@angular/http';
import { User } from './../user';
import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users:User [] ; 
  userToEdit:User = new User() ;
  showCreate:boolean = true;
  showEdit:boolean = false;
 
  constructor(private _userService:UserService) { }

  ngOnInit() {
     this.getUsers()
  }

  deleteEventHandler($event) {
    console.log("UserComponent => deleteEventHandler ",$event.user);
    this.deleteUser($event.user)
  }

  cancelEdit($event) {
    console.log("UserComponent => cancelEdit ",$event);
    this.showHideComponent($event);
  }

  cancelCreate($event) {
    console.log("UserComponent => cancelCreate ",$event);
    this.showHideComponent($event);
  }

  showCreateHandler($event){
    this.showHideComponent({component:"create",value:true});
  }
  
  showEditHandler($event){
    console.log("UserComponent => showEditHandler ",$event.user, this.userToEdit);
    //this.userToEdit = $event.user;
    Object.assign(this.userToEdit,$event.user)
    console.log("12346789673486787780976");
    this.showHideComponent({component:"edit",value:true});
  }

  showHideComponent($event) { 
    this.showCreate = false;
    this.showEdit = false;
    
    console.log($event.component, $event.value)
    if($event.component === "create") {
      this.showCreate = $event.value;
    }
    else if($event.component === "edit") {
      console.log( $event.component, $event.value, typeof $event.value)
      this.showEdit = $event.value;
      console.log( "edit3",  this.showEdit)
 
    } 
    else {
      throw("unknown component selected")
    }
  }

  getUsers() {
    this._userService.getUsers()
      .then((users) => this.users = users);
  }

  saveEditHandler($event) {
    console.log("User Component: => saveEditHandler ",$event);
    this.updateUser($event.user)
  }

  // HTTP METHODS
  // TODO move all these 

  updateUser(user:User):void {
    this._userService.updateUser(user)
      .then(() => this.getUsers());
  }


  createUser(user:User) {
    console.log("User Component: => createUser ",user);
    
    this._userService.createUser(user)
      .then(() => this.getUsers());
  }

  userCreateHandler($event) {
    console.log("User Component: => userCreateHandler ",$event);
   
    this.createUser($event.user)
  }

  deleteUser(user:User) {
    console.log("User Component: => deleteUser ",user);
    this._userService.deleteUser(user)
      .then(() => this.getUsers());
  }
}
