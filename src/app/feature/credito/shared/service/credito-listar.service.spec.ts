/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CreditoListarService } from './credito-listar.service';

describe('Service: CreditoListar', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreditoListarService]
    });
  });

  it('should ...', inject([CreditoListarService], (service: CreditoListarService) => {
    expect(service).toBeTruthy();
  }));
});
