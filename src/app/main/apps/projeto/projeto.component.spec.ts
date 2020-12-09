import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjetoService } from 'app/main/services/projeto.service';

import { ProjetoComponent } from './projeto.component';

describe('ProjetoComponent', () => {
  let component: ProjetoComponent;
  let fixture: ComponentFixture<ProjetoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjetoComponent ],
      providers: [ ProjetoService ],
      imports: [ HttpClientModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
