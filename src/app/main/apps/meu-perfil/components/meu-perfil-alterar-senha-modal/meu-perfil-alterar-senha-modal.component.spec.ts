import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MeuPerfilService } from 'app/main/services/meu-perfil.service';
import { MeuPerfilAlterarSenhaModalComponent } from './meu-perfil-alterar-senha-modal.component';


describe('MeuPerfilAlterarSenhaModalComponent', () => {
  let component: MeuPerfilAlterarSenhaModalComponent;
  let fixture: ComponentFixture<MeuPerfilAlterarSenhaModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeuPerfilAlterarSenhaModalComponent ],
      imports: [ FormsModule, ReactiveFormsModule, MatDialogModule, MatDialogRef ],
      providers: [ MeuPerfilService ]
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
