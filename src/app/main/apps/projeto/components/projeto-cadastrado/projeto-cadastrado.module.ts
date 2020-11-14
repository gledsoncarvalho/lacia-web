import { NgModule } from '@angular/core';
import { FuseSharedModule } from '../../../../../../@fuse/shared.module';
import { ProjetoCadastradoRoutingModule } from './projeto-cadastrado-routing.module';
import { ProjetoCadastradoComponent } from './projeto-cadastrado.component';


@NgModule({
    declarations: [ProjetoCadastradoComponent],
    imports: [
        //SharedModule,
        FuseSharedModule,
        ProjetoCadastradoRoutingModule
    ],
    entryComponents: [
    ]

})

export class ProjetoCadastradoModule { } 
