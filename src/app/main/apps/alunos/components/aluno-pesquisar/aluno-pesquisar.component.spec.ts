import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FuseSharedModule } from '@fuse/shared.module';

import { AlunoPesquisarComponent } from './aluno-pesquisar.component';

describe('AlunoPesquisarComponent', () => {
  let component: AlunoPesquisarComponent;
  let fixture: ComponentFixture<AlunoPesquisarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlunoPesquisarComponent ],
      imports: [ FormsModule, ReactiveFormsModule, FuseSharedModule, BrowserAnimationsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlunoPesquisarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
