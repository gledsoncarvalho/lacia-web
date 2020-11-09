import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AprovarPesquisadorComponent } from './aprovar-pesquisador.component';

describe('AprovarPesquisadorComponent', () => {
  let component: AprovarPesquisadorComponent;
  let fixture: ComponentFixture<AprovarPesquisadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AprovarPesquisadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AprovarPesquisadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
