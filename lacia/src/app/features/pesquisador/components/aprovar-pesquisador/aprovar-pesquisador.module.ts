import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AprovarPesquisadorRoutingModule } from './aprovar-pesquisador-routing.module';
import { AprovarPesquisadorComponent } from './aprovar-pesquisador.component';
 



@NgModule({
  declarations: [AprovarPesquisadorComponent],
  imports: [
    CommonModule,
    AprovarPesquisadorRoutingModule,
    SharedModule
  ]
})
export class AprovarPesquisadorModule { }
