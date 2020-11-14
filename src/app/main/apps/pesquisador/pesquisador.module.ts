import { NgModule } from '@angular/core';
import { FuseSharedModule } from '../../../../@fuse/shared.module';
import { PesquisadorPesquisarComponent } from './components/pesquisador-pesquisar/pesquisador-pesquisar.component';
import { PesquisadorRoutingModule } from './pesquisador-routing.module';
import { PesquisadorComponent } from './pesquisador.component';


@NgModule({
    declarations: [
        PesquisadorComponent,
        PesquisadorPesquisarComponent
    ],
    imports: [
        FuseSharedModule,
        PesquisadorRoutingModule
    ],
    entryComponents: [
    ]

})

export class PesquisadorModule { }
