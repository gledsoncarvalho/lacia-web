import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AprovarProjetoComponent } from './aprovar-projeto.component';

describe('AprovarProjetoComponent', () => {
  let component: AprovarProjetoComponent;
  let fixture: ComponentFixture<AprovarProjetoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AprovarProjetoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AprovarProjetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
