import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunoEditarModalComponent } from './aluno-editar-modal.component';

describe('AlunoEditarModalComponent', () => {
  let component: AlunoEditarModalComponent;
  let fixture: ComponentFixture<AlunoEditarModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlunoEditarModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlunoEditarModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
