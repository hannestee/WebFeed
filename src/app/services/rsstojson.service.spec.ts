/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RsstojsonService } from './rsstojson.service';

describe('RsstojsonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RsstojsonService]
    });
  });

  it('should ...', inject([RsstojsonService], (service: RsstojsonService) => {
    expect(service).toBeTruthy();
  }));
});
