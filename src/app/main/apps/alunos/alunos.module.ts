import { NgModule } from '@angular/core';
import { FuseSharedModule } from '../../../../@fuse/shared.module';
import { AlunosRoutingModule } from './alunos-routing.module';
import { AlunosComponent } from './alunos.component';
import { AlunoCadastrarComponent } from './components/aluno-cadastrar/aluno-cadastrar.component';
import { AlunoPesquisarComponent } from './components/aluno-pesquisar/aluno-pesquisar.component';




@NgModule({
    declarations: [
        AlunosComponent,
        AlunoCadastrarComponent,
        AlunoPesquisarComponent
    ],
    imports: [
        FuseSharedModule,
        //SharedModule,
        AlunosRoutingModule
    ],
    entryComponents: [

    ]
})

export class AlunosModule { }



