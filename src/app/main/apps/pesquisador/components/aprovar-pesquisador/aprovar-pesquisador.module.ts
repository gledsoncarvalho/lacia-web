import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FuseSharedModule } from '../../../../../../@fuse/shared.module';
import { AprovarPesquisadorRoutingModule } from './aprovar-pesquisador-routing.module';
import { AprovarPesquisadorComponent } from './aprovar-pesquisador.component';

@NgModule({
    declarations: [AprovarPesquisadorComponent],
    imports: [
        CommonModule,
        AprovarPesquisadorRoutingModule,
        FuseSharedModule
        // SharedModule
    ]
})
export class AprovarPesquisadorModule { }
