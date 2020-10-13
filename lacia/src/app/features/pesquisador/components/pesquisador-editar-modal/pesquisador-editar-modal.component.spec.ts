import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PesquisadorEditarModalComponent } from './pesquisador-editar-modal.component';

describe('PesquisadorEditarModalComponent', () => {
  let component: PesquisadorEditarModalComponent;
  let fixture: ComponentFixture<PesquisadorEditarModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PesquisadorEditarModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PesquisadorEditarModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
