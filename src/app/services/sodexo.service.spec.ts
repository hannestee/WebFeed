/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SodexoService } from './sodexo.service';

describe('SodexoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SodexoService]
    });
  });

  it('should ...', inject([SodexoService], (service: SodexoService) => {
    expect(service).toBeTruthy();
  }));
});
