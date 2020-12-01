import { NgModule } from '@angular/core';
import { FuseSharedModule } from '../../../../../../@fuse/shared.module';
import { MeuProjetoRoutingModule } from './meu-projeto-routing.module';
import { MeuProjetoComponent } from './meu-projeto.component';
import { AddMembroModalComponent } from './components/add-membro-modal/add-membro-modal.component';




@NgModule({
    declarations: [MeuProjetoComponent, AddMembroModalComponent],
    imports: [
        FuseSharedModule,
        MeuProjetoRoutingModule
    ]
})

export class MeuProjetoModule { }



