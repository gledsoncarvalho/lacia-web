import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordenadorEditarModalComponent } from './coordenador-editar-modal.component';

describe('CoordenadorEditarModalComponent', () => {
  let component: CoordenadorEditarModalComponent;
  let fixture: ComponentFixture<CoordenadorEditarModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoordenadorEditarModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordenadorEditarModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
