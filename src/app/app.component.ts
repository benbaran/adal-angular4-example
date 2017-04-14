import { Component } from '@angular/core';

import { AdalConfigurationService } from './adal-configuration.service';
import { Adal4Service } from './adal-angular4/adal4.service';

@Component({
  selector: 'aa4-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Adal Angular4 Example';

  constructor(private config: AdalConfigurationService, private service: Adal4Service) {

    this.service.init(this.config.config);

  }
}
