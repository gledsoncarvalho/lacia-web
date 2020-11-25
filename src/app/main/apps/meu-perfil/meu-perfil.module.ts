import { NgModule } from '@angular/core';
import { MeuPerfilEditarModalComponent } from './components/meu-perfil-editar-modal/meu-perfil-editar-modal.component';
import { MeuPerfilRoutingModule } from './meu-perfil-routing.module';
import { MeuPerfilComponent } from './meu-perfil.component';
import { FuseSharedModule } from '../../../../@fuse/shared.module';
import { MeuPerfilService } from '../../services/meu-perfil.service';


@NgModule({
    declarations: [
        MeuPerfilComponent,
        MeuPerfilEditarModalComponent
    ],
    imports: [
        FuseSharedModule,
        //SharedModule,
        MeuPerfilRoutingModule
    ],
    providers: [
        MeuPerfilService
    ]
})
export class MeuPerfilModule { }
