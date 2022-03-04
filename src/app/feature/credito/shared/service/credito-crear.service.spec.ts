/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { CreditoCrearService } from './credito-crear.service';

describe('Service: Credito', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreditoCrearService]
    });
  });

  it('should ...', inject([CreditoCrearService], (service: CreditoCrearService) => {
    expect(service).toBeTruthy();
  }));
});
