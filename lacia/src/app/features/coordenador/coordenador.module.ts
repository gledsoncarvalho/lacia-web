import { NgModule } from '@angular/core';
import { SharedModule } from './../../shared/shared.module';
import { CoordenadorRoutingModule } from './coordenador-routing.module';
import { CoordenadorComponent } from './coordenador.component';
import { CoordenadorPesquisarComponent } from './components/coordenador-pesquisar/coordenador-pesquisar.component';
import { CoordenadorCadastrarComponent } from './components/coordenador-cadastrar/coordenador-cadastrar.component';



@NgModule({
  declarations: [CoordenadorComponent, CoordenadorPesquisarComponent, CoordenadorCadastrarComponent],
  imports: [
    SharedModule,
    CoordenadorRoutingModule
  ]
})
export class CoordenadorModule { }
