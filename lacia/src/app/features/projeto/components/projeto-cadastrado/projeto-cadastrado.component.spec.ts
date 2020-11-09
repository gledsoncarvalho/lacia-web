import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetoCadastradoComponent } from './projeto-cadastrado.component';

describe('ProjetoCadastradoComponent', () => {
  let component: ProjetoCadastradoComponent;
  let fixture: ComponentFixture<ProjetoCadastradoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjetoCadastradoComponent ]
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
