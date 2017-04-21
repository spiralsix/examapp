import { CookieService } from 'angular2-cookie/services/cookies.service';

import { UserService } from './user.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserRegistrationComponent } from './user/user-registration/user-registration.component';
import { UserNewComponent } from './user/user-new/user-new.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { DatePickerModule } from 'ng2-datepicker';
import { UserEmailFilterPipe } from './useremailfilter.pipe'; 

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserListComponent,
    UserLoginComponent,
    UserRegistrationComponent,
    UserNewComponent,
    UserEditComponent,
    UserEmailFilterPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DatePickerModule
  ],
  providers: [
    UserService,
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
