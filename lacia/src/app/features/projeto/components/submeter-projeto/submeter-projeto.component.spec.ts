import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmeterProjetoComponent } from './submeter-projeto.component';

describe('SubmeterProjetoComponent', () => {
  let component: SubmeterProjetoComponent;
  let fixture: ComponentFixture<SubmeterProjetoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmeterProjetoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmeterProjetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
