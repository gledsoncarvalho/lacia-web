import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunoPesquisarComponent } from './aluno-pesquisar.component';

describe('AlunoPesquisarComponent', () => {
  let component: AlunoPesquisarComponent;
  let fixture: ComponentFixture<AlunoPesquisarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlunoPesquisarComponent ]
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
