import { Component } from '@angular/core';

import { Adal4Service} from 'adal-angular4';

// Adal Configuration
const config = {
  tenant: 'careportfol.io',
  clientId: 'f485327e-ddee-468d-8837-da2d399c0390'
};

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

  logOut(){
    this.service.logOut();
  }
}
