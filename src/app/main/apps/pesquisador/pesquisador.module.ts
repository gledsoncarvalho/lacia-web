import { PesquisadorService } from './../../services/pesquisador.service';
import { AprovarPesquisadorComponent } from './components/aprovar-pesquisador/aprovar-pesquisador.component';
import { NgModule } from '@angular/core';
import { FuseSharedModule } from '../../../../@fuse/shared.module';
import { PesquisadorPesquisarComponent } from './components/pesquisador-pesquisar/pesquisador-pesquisar.component';
import { PesquisadorRoutingModule } from './pesquisador-routing.module';
import { PesquisadorComponent } from './pesquisador.component';


@NgModule({
    declarations: [
        PesquisadorComponent,
        PesquisadorPesquisarComponent,
        AprovarPesquisadorComponent
    ],
    imports: [
        FuseSharedModule,
        PesquisadorRoutingModule
    ],
    providers: [
        PesquisadorService
    ]

})

export class PesquisadorModule { }
