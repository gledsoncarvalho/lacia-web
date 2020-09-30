import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordenadorCadastrarComponent } from './coordenador-cadastrar.component';

describe('CoordenadorCadastrarComponent', () => {
  let component: CoordenadorCadastrarComponent;
  let fixture: ComponentFixture<CoordenadorCadastrarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoordenadorCadastrarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordenadorCadastrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
