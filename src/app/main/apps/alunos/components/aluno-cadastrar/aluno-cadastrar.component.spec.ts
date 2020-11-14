import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunoCadastrarComponent } from './aluno-cadastrar.component';

describe('AlunoCadastrarComponent', () => {
  let component: AlunoCadastrarComponent;
  let fixture: ComponentFixture<AlunoCadastrarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlunoCadastrarComponent ]
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
