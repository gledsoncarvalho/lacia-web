import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FuseSharedModule } from '@fuse/shared.module';

import { CoordenadorPesquisarComponent } from './coordenador-pesquisar.component';

describe('CoordenadorPesquisarComponent', () => {
  let component: CoordenadorPesquisarComponent;
  let fixture: ComponentFixture<CoordenadorPesquisarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoordenadorPesquisarComponent ],
      imports: [ FormsModule, ReactiveFormsModule, FuseSharedModule, BrowserAnimationsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordenadorPesquisarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
