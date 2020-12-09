import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FuseSharedModule } from '@fuse/shared.module';

import { AlunosComponent } from './alunos.component';

describe('AlunosComponent', () => {
  let component: AlunosComponent;
  let fixture: ComponentFixture<AlunosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlunosComponent ],
      providers: [ FuseSharedModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlunosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
