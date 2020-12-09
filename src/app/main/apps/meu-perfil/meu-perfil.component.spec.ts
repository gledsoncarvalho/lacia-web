import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FuseSharedModule } from '@fuse/shared.module';

import { MeuPerfilComponent } from './meu-perfil.component';

describe('MeuPerfilComponent', () => {
  let component: MeuPerfilComponent;
  let fixture: ComponentFixture<MeuPerfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeuPerfilComponent ],
      imports: [ FormsModule, ReactiveFormsModule, FuseSharedModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeuPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
