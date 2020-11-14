import { NgModule } from '@angular/core';
import { FuseSharedModule } from '../../../../../../@fuse/shared.module';
import { MeuProjetoRoutingModule } from './meu-projeto-routing.module';
import { MeuProjetoComponent } from './meu-projeto.component';




@NgModule({
    declarations: [MeuProjetoComponent],
    imports: [
        FuseSharedModule,
        MeuProjetoRoutingModule
    ]
})

export class MeuProjetoModule { }



