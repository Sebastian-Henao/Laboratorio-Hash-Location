import { TestBed } from '@angular/core/testing';

import { ModuleLolService } from './module-lol.service';
import { LOL_DATA } from '../../../core/config/lol.config';

describe('ModuleLolService', () => {
  let service: ModuleLolService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModuleLolService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getAllLol debería retornar un observable con los personajes de LoL', (done) => {
    service.getAllLol().subscribe((champions) => {
      expect(champions).toEqual(LOL_DATA);
      expect(champions.length).toBe(LOL_DATA.length);
      done();
    });
  });
});
