import { TestBed, inject } from '@angular/core/testing';

import { AdalConfigurationService } from './adal-configuration.service';

describe('AdalConfigurationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdalConfigurationService]
    });
  });

  it('should ...', inject([AdalConfigurationService], (service: AdalConfigurationService) => {
    expect(service).toBeTruthy();
  }));
});
