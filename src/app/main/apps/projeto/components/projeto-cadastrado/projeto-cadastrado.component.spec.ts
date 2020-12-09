import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FuseSharedModule } from '@fuse/shared.module';
import { ProjetoService } from 'app/main/services/projeto.service';

import { ProjetoCadastradoComponent } from './projeto-cadastrado.component';

describe('ProjetoCadastradoComponent', () => {
  let component: ProjetoCadastradoComponent;
  let fixture: ComponentFixture<ProjetoCadastradoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjetoCadastradoComponent ],
      imports: [ FuseSharedModule, BrowserAnimationsModule ],
      providers: [ ProjetoService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetoCadastradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
