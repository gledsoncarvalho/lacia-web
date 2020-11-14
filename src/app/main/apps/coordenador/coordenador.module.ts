import { NgModule } from '@angular/core';
import { FuseSharedModule } from '../../../../@fuse/shared.module';
import { CoordenadorPesquisarComponent } from './components/coordenador-pesquisar/coordenador-pesquisar.component';
import { CoordenadorRoutingModule } from './coordenador-routing.module';
import { CoordenadorComponent } from './coordenador.component';


@NgModule({
    declarations: [
        CoordenadorComponent,
        CoordenadorPesquisarComponent
    ],
    imports: [
        FuseSharedModule,
        //SharedModule,
        CoordenadorRoutingModule
    ],
    entryComponents: [
    ]
})
export class CoordenadorModule { }
