import { NgModule } from '@angular/core';
import { MeuPerfilEditarModalComponent } from './components/meu-perfil-editar-modal/meu-perfil-editar-modal.component';
import { MeuPerfilRoutingModule } from './meu-perfil-routing.module';
import { MeuPerfilComponent } from './meu-perfil.component';
import { FuseSharedModule } from '../../../../@fuse/shared.module';


@NgModule({
    declarations: [
        MeuPerfilComponent,
        MeuPerfilEditarModalComponent
    ],
    imports: [
        FuseSharedModule,
        //SharedModule,
        MeuPerfilRoutingModule
    ]
})
export class MeuPerfilModule { }
