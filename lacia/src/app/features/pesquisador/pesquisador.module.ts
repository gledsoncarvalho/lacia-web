import { NgModule } from '@angular/core';
import { PesquisadorRoutingModule } from './pesquisador-routing.module';
import { PesquisadorComponent } from './pesquisador.component';
import { PesquisadorCadastrarComponent } from './components/pesquisador-cadastrar/pesquisador-cadastrar.component';
import { PesquisadorPesquisarComponent } from './components/pesquisador-pesquisar/pesquisador-pesquisar.component';
import { PesquisadorEditarModalComponent } from './components/pesquisador-editar-modal/pesquisador-editar-modal.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [PesquisadorComponent, PesquisadorCadastrarComponent, PesquisadorPesquisarComponent, PesquisadorEditarModalComponent],
  imports: [
    SharedModule,
    PesquisadorRoutingModule
  ],
  entryComponents: [
    PesquisadorEditarModalComponent
  ]
  
})

export class PesquisadorModule { }
