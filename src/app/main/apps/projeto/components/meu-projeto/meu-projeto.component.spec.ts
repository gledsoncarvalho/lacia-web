import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FuseSharedModule } from '@fuse/shared.module';
import { MeuProjetoComponent } from './meu-projeto.component';


describe('MeuProjetoComponent', () => {
  let component: MeuProjetoComponent;
  let fixture: ComponentFixture<MeuProjetoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeuProjetoComponent ],
      imports: [ FuseSharedModule, BrowserAnimationsModule ]
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
