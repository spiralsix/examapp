import { User } from './../../user';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { DatePickerOptions, DateModel } from 'ng2-datepicker';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  @Output() saveEditEvent = new EventEmitter();
  @Output() cancelEditEvent = new EventEmitter();
  @Input() user:User;
 
  @Input() userToEdit:User;
  
  date: DateModel;
  options: DatePickerOptions;

    constructor() { }

    ngOnInit() {
      console.log("UserEditComponent => ngOnInit ", this.user, this.userToEdit)
      Object.assign(this.userToEdit,this.user)
     
    }
    editUser(userToEdit:User) {
      console.log("UserEditComponent => editUser")
      this.saveEditEvent.emit({user:this.userToEdit})
    }
    cancel() {
      console.log("UserEditComponent => cancel")
      this.cancelEditEvent.emit({component:"edit", value:false})
    }
  }
