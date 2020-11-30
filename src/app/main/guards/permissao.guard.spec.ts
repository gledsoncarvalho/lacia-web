import { TestBed } from '@angular/core/testing';

import { PermissaoGuard } from './permissao.guard';

describe('PermissaoGuard', () => {
  let guard: PermissaoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PermissaoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
