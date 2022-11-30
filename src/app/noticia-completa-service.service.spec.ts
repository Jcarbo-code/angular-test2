import { TestBed } from '@angular/core/testing';

import { NoticiaCompletaServiceService } from './noticia-completa-service.service';

describe('NoticiaCompletaServiceService', () => {
  let service: NoticiaCompletaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NoticiaCompletaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
