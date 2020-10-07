import { NgModule } from '@angular/core';
import { SharedModule } from './../../shared/shared.module';
import { CoordenadorRoutingModule } from './coordenador-routing.module';
import { CoordenadorComponent } from './coordenador.component';
import { CoordenadorPesquisarComponent } from './components/coordenador-pesquisar/coordenador-pesquisar.component';
import { CoordenadorCadastrarComponent } from './components/coordenador-cadastrar/coordenador-cadastrar.component';
import { CoordenadorEditarModalComponent } from './components/coordenador-editar-modal/coordenador-editar-modal.component';



@NgModule({
  declarations: [CoordenadorComponent, CoordenadorPesquisarComponent, CoordenadorCadastrarComponent, CoordenadorEditarModalComponent],
  imports: [
    SharedModule,
    CoordenadorRoutingModule
  ],
  entryComponents: [
    CoordenadorEditarModalComponent
  ]
})
export class CoordenadorModule { }
