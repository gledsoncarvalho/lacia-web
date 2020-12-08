import { TestBed } from '@angular/core/testing';

import { ListaTarefaService } from './lista-tarefa.service';

describe('ListaTarefaService', () => {
  let service: ListaTarefaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaTarefaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
