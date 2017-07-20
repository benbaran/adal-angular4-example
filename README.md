# Adal-Angular 4 Example Application

___

This is a sample application using the adal-angular4 NPM package to authenticate to Azure Active Directory.
___

## Change Log

### 1.0

- Updated HTTP to user Interceptor for Angular 4.3.0+
- Updated all packages to newest versions

___

## How to Re-Create this Project

### Install the Latest Version of Angular CLI

```bash

npm uninstall -g @angular/cli
npm cache clean
npm install -g @angular/cli@latest

```

### Create a New Angular CLI Project with Routing Enabled

```bash

ng new adal-angular4-example --routing --prefix aa4

```

### Test the the Application Runs Successfully

```bash

ng serve -o

```

### Install the adal-angular4 NPM Package

```bash

npm install --save adal-angular4@latest

```

### Create a HomeComponent and a NotFound Component

```bash

ng g component Home
ng g component NotFound

```

### Configure Routing for the HomeComponent and NotFoundComponent in app-routing.module.ts

```javascript

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';                  // <-- ADD
import { NotFoundComponent } from './not-found/not-found.component';    // <-- ADD

const routes: Routes = [
  { path: '', component: HomeComponent },                               // <-- MODIFY
  { path: '**', component: NotFoundComponent }                          // <-- MODIFY
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

```

### Add Adal4Service and Adal4HTTPService to app.module.ts

```javascript

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Http } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { Adal4Service, Adal4HTTPService } from 'adal-angular4';         // <-- ADD

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    Adal4Service,                                                       // <-- ADD
    {                                                                   // <-- ADD
      provide: Adal4HTTPService,                                        // <-- ADD
      useFactory: Adal4HTTPService.factory,                             // <-- ADD
      deps: [Http, Adal4Service]                                        // <-- ADD
    }                                                                   // <-- ADD
  ],
  bootstrap: [AppComponent],
})

export class AppModule { }

```

### Intialize Adal4Service in app.component.ts

```javascript

import { Component } from '@angular/core';

import { Adal4Service } from 'adal-angular4';

const config: adal.Config = {                           // <-- ADD
    tenant: 'xxx.onmicrosoft.com',                      // <-- ADD
    clientId: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'    // <-- ADD
}                                                       // <-- ADD

@Component({
  selector: 'aa4-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Adal Angular4 Example';

  constructor(private service: Adal4Service) {      // <-- ADD
    this.service.init(config);                      // <-- ADD
  }                                                 // <-- ADD
}

```

### Implement Authentication Logic in home.component.ts

```javascript
import { Component, OnInit } from '@angular/core';
import { HttpModule } from '@angular/http';

import { Adal4Service, Adal4HTTPService } from 'adal-angular4';

@Component({
  selector: 'aa4-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  // Inject the ADAL Services
  constructor(private service: Adal4Service, private http: Adal4HTTPService) { }

  // Check authentication on component load
  ngOnInit() {

    // Handle callback if this is a redirect from Azure
    this.service.handleWindowCallback();

    // Check if the user is authenticated. If not, call the login() method
    if (!this.service.userInfo.authenticated) {
      this.service.login();
    }

    // Log the user information to the console
    console.log('username ' + this.service.userInfo.username);

    console.log('authenticated: ' + this.service.userInfo.authenticated);

    console.log('name: ' + this.service.userInfo.profile.name);

    console.log('token: ' + this.service.userInfo.token);

    console.log(this.service.userInfo.profile);
  }

  // Logout Method
  public logout() {
    this.service.logOut();
  }
}

```

npm install --save @angular/material @angular/cdk