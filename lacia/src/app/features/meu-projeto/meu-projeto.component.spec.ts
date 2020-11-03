import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeuProjetoComponent } from './meu-projeto.component';

describe('MeuProjetoComponent', () => {
  let component: MeuProjetoComponent;
  let fixture: ComponentFixture<MeuProjetoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeuProjetoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeuProjetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
