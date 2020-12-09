import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { FuseSharedModule } from '@fuse/shared.module';
import { MeuPerfilService } from 'app/main/services/meu-perfil.service';
import { MeuPerfilEditarModalComponent } from './meu-perfil-editar-modal.component';


describe('MeuPerfilEditarModalComponent', () => {
  let component: MeuPerfilEditarModalComponent;
  let fixture: ComponentFixture<MeuPerfilEditarModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeuPerfilEditarModalComponent ],
      imports: [ FormsModule, ReactiveFormsModule, FuseSharedModule, MatDialogModule ],
      providers: [ MeuPerfilService ]
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
