import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from './../../shared/shared.module';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';



@NgModule({
  declarations: [MainComponent],
  imports: [
    CoreModule,
    CommonModule,
    MainRoutingModule,
    SharedModule,
    
  ]
})
export class MainModule { }
