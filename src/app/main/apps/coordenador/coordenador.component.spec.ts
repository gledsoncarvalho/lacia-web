import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FuseSharedModule } from '@fuse/shared.module';

import { CoordenadorComponent } from './coordenador.component';

describe('CoordenadorComponent', () => {
  let component: CoordenadorComponent;
  let fixture: ComponentFixture<CoordenadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoordenadorComponent ],
      providers: [ FuseSharedModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordenadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
