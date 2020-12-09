import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FuseSharedModule } from '@fuse/shared.module';
import { SubmeterProjetoComponent } from './submeter-projeto.component';


describe('SubmeterProjetoComponent', () => {
  let component: SubmeterProjetoComponent;
  let fixture: ComponentFixture<SubmeterProjetoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmeterProjetoComponent ],
      imports: [ FormsModule, ReactiveFormsModule, FuseSharedModule, BrowserAnimationsModule ] 
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
