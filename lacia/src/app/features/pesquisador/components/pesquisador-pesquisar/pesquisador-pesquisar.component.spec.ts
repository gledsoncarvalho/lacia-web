import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PesquisadorPesquisarComponent } from './pesquisador-pesquisar.component';

describe('PesquisadorPesquisarComponent', () => {
  let component: PesquisadorPesquisarComponent;
  let fixture: ComponentFixture<PesquisadorPesquisarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PesquisadorPesquisarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PesquisadorPesquisarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
