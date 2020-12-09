import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FuseSharedModule } from '@fuse/shared.module';

import { AlunoCadastrarComponent } from './aluno-cadastrar.component';

describe('AlunoCadastrarComponent', () => {
  let component: AlunoCadastrarComponent;
  let fixture: ComponentFixture<AlunoCadastrarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlunoCadastrarComponent ],
      imports: [ FormsModule, ReactiveFormsModule, FuseSharedModule, BrowserAnimationsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlunoCadastrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
