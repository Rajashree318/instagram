import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
import { ToastrModule } from 'ngx-toastr';


import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { TextDirective } from './text.directive';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {AuthGuardGuard} from './auth-guard.guard';

import {RouterModule,Router} from '@angular/router';
import {FormsModule} from '@angular/forms';
import { ReactiveComponent } from './reactive/reactive.component';
import { EmailserviceComponent } from './emailservice/emailservice.component';
import { Emailservice } from './email.service';
import { SignupComponent } from './signup/signup.component';
import { AddimagesComponent } from './addimages/addimages.component';
@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    TextDirective,
    HeaderComponent,
    HomeComponent,
    PagenotfoundComponent,
    LoginComponent,
    RegisterComponent,
    ReactiveComponent,
    EmailserviceComponent,
    SignupComponent,
    AddimagesComponent
  
  ],
  imports: [
    BrowserModule,FormsModule,
    CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
    RouterModule.forRoot([
     {path:'home',component:HomeComponent },
     {path:'login',component:LoginComponent},
     {path:'register',component:RegisterComponent},
     {path:'emailservice', component:EmailserviceComponent},
     {path :'addimages' ,component:AddimagesComponent,canActivate:[AuthGuardGuard]},
     {path:'signup', component:SignupComponent},
     {path:'**',component:PagenotfoundComponent}

    ])

    
  ],
  providers: [Emailservice],
  bootstrap: [AppComponent]
})
export class AppModule { }
