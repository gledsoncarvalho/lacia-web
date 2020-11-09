import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AprovarProjetoModalComponent } from './aprovar-projeto-modal.component';

describe('AprovarProjetoModalComponent', () => {
  let component: AprovarProjetoModalComponent;
  let fixture: ComponentFixture<AprovarProjetoModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AprovarProjetoModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AprovarProjetoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
