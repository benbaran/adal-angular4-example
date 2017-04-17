import { Component, OnInit } from '@angular/core';
import {Adal4Service, Adal4User} from 'adal-angular4';
import {Adal4HTTPService} from 'adal-angular4';
import {HttpModule} from '@angular/http';

@Component({
  selector: 'aa4-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service: Adal4Service, private http: Adal4HTTPService) {


  }

  ngOnInit() {
    this.service.handleWindowCallback();

    if (!this.service.userInfo.authenticated) {
      this.service.login();
    }

    console.log('username ' + this.service.userInfo.username);

    console.log('authenticated: ' + this.service.userInfo.authenticated);

    console.log('name: ' + this.service.userInfo.profile.name);

    console.log('token: ' + this.service.userInfo.token);

    console.log(this.service.userInfo.profile);

    this.http.get('http:/localhost/8080/api/test');
  }

  public logout() {
    this.service.logOut();
  }
}
