import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeuPerfilAlterarSenhaModalComponent } from './meu-perfil-alterar-senha-modal.component';

describe('MeuPerfilAlterarSenhaModalComponent', () => {
  let component: MeuPerfilAlterarSenhaModalComponent;
  let fixture: ComponentFixture<MeuPerfilAlterarSenhaModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeuPerfilAlterarSenhaModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeuPerfilAlterarSenhaModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
