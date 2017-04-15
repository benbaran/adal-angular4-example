import { Component } from '@angular/core';

import {Adal4Service} from 'adal-angular4';


const config: adal.Config = {
    tenant: 'bbaranjourneycare.onmicrosoft.com',
    clientId: 'c87f021f-b17e-454d-8303-0c2c07dfaf78'
}

@Component({
  selector: 'aa4-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Adal Angular4 Example';

  constructor(private service: Adal4Service) {

    this.service.init(config);

  }
}
