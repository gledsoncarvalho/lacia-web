import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMembroModalComponent } from './add-membro-modal.component';

describe('AddMembroModalComponent', () => {
  let component: AddMembroModalComponent;
  let fixture: ComponentFixture<AddMembroModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMembroModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMembroModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
