import { Component, OnInit } from '@angular/core';
import { Adal4Service } from '../adal-angular4/adal4.service';

@Component({
  selector: 'aa4-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service: Adal4Service) {

    console.log('HomeComponent');



    service.handleWindowCallback();

    if (!this.service.userInfo.authenticated) {
      this.service.login();
    }

    console.log('username ' + service.userInfo.username);

    console.log('authenticated: ' + service.userInfo.authenticated);

    console.log('name: ' + service.userInfo.profile.name);

    console.log('token: ' + service.userInfo.token);

    console.log(service.userInfo.profile);
  }


  ngOnInit() {
  }

  public logout(){
    this.service.logOut();
  }
}
