import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordenadorPesquisarComponent } from './coordenador-pesquisar.component';

describe('CoordenadorPesquisarComponent', () => {
  let component: CoordenadorPesquisarComponent;
  let fixture: ComponentFixture<CoordenadorPesquisarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoordenadorPesquisarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordenadorPesquisarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
