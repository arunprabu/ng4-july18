import { TestBed, inject } from '@angular/core/testing';

import { CalcService } from './calc.service';

describe('CalcService', () => {
  beforeEach(() => {
    // The following is similar to @NgModule decorators setup. 
    TestBed.configureTestingModule({
      providers: [CalcService] // Remember service should be provided to be tested.
    });
  });

  it('should be created', inject([CalcService], (service: CalcService) => {
    expect(service).toBeTruthy();
  }));

  //you can write you own service method related test cases by following component test specs.
});
