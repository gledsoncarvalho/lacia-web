import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PesquisadorCadastrarComponent } from './pesquisador-cadastrar.component';

describe('PesquisadorCadastrarComponent', () => {
  let component: PesquisadorCadastrarComponent;
  let fixture: ComponentFixture<PesquisadorCadastrarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PesquisadorCadastrarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PesquisadorCadastrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
