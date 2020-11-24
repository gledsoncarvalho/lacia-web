import { TestBed } from '@angular/core/testing';

import { ProjetosGuard } from './projetos.guard';

describe('ProjetosGuard', () => {
  let guard: ProjetosGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ProjetosGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
