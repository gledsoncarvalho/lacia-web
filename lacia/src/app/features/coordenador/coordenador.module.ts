import { NgModule } from '@angular/core';
import { SharedModule } from './../../shared/shared.module';
import { CoordenadorRoutingModule } from './coordenador-routing.module';
import { CoordenadorComponent } from './coordenador.component';
import { CoordenadorPesquisarComponent } from './components/coordenador-pesquisar/coordenador-pesquisar.component';


@NgModule({
  declarations: [CoordenadorComponent, CoordenadorPesquisarComponent],
  imports: [
    SharedModule,
    CoordenadorRoutingModule
  ],
  entryComponents: [
  ]
})
export class CoordenadorModule { }
