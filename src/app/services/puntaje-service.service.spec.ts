/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PuntajeServiceService } from './puntaje-service.service';

describe('Service: PuntajeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PuntajeServiceService]
    });
  });

  it('should ...', inject([PuntajeServiceService], (service: PuntajeServiceService) => {
    expect(service).toBeTruthy();
  }));
});



