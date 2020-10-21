import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeuPerfilEditarModalComponent } from './meu-perfil-editar-modal.component';

describe('MeuPerfilEditarModalComponent', () => {
  let component: MeuPerfilEditarModalComponent;
  let fixture: ComponentFixture<MeuPerfilEditarModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeuPerfilEditarModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeuPerfilEditarModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
