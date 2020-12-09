import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FuseSharedModule } from '../../../../@fuse/shared.module';
import { CoordenadorPesquisarComponent } from './components/coordenador-pesquisar/coordenador-pesquisar.component';
import { CoordenadorRoutingModule } from './coordenador-routing.module';
import { CoordenadorComponent } from './coordenador.component';
import { PermissaoGuard } from '../../guards/permissao.guard';


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
    providers: [
        PermissaoGuard
    ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class CoordenadorModule { }
