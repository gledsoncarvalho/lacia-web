import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { FuseSharedModule } from '@fuse/shared.module';
import { ProjetoService } from 'app/main/services/projeto.service';
import { AprovarProjetoModalComponent } from './aprovar-projeto-modal.component';


describe('AprovarProjetoModalComponent', () => {
  let component: AprovarProjetoModalComponent;
  let fixture: ComponentFixture<AprovarProjetoModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AprovarProjetoModalComponent ],
      imports: [ FuseSharedModule, MatDialogModule, MatDialogRef],
      providers: [ ProjetoService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AprovarProjetoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
