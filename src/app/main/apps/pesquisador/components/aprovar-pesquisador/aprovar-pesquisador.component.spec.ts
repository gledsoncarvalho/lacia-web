import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AlertComponent } from '@fuse/components/alert/alert.component';
import { FuseSharedModule } from '@fuse/shared.module';

import { AprovarPesquisadorComponent } from './aprovar-pesquisador.component';

describe('AprovarPesquisadorComponent', () => {
  let component: AprovarPesquisadorComponent;
  let fixture: ComponentFixture<AprovarPesquisadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AprovarPesquisadorComponent, AlertComponent ],
      providers: [ AlertComponent ],
      imports: [ FuseSharedModule ]
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
