import { Injectable } from '@angular/core';

@Injectable()
export class AdalConfigurationService {

  public config = {
    tenant: 'bbaranjourneycare.onmicrosoft.com',
    clientId: 'c87f021f-b17e-454d-8303-0c2c07dfaf78'

  };

  constructor() { }

}
