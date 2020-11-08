import { NgModule } from '@angular/core';
import { PesquisadorRoutingModule } from './pesquisador-routing.module';
import { PesquisadorComponent } from './pesquisador.component';
import { PesquisadorPesquisarComponent } from './components/pesquisador-pesquisar/pesquisador-pesquisar.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [PesquisadorComponent, PesquisadorPesquisarComponent],
  imports: [
    SharedModule,
    PesquisadorRoutingModule
  ],
  entryComponents: [
  ]
  
})

export class PesquisadorModule { }
