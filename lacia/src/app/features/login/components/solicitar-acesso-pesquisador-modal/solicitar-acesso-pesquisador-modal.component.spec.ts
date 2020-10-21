import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitarAcessoPesquisadorModalComponent } from './solicitar-acesso-pesquisador-modal.component';

describe('SolicitarAcessoPesquisadorModalComponent', () => {
  let component: SolicitarAcessoPesquisadorModalComponent;
  let fixture: ComponentFixture<SolicitarAcessoPesquisadorModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolicitarAcessoPesquisadorModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitarAcessoPesquisadorModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
