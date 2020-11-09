import { NgModule} from '@angular/core';
import { SharedModule } from './../../shared/shared.module';
import { AlunoCadastrarComponent } from './components/aluno-cadastrar/aluno-cadastrar.component';
import { AlunosComponent } from './alunos.component';
import { AlunosRoutingModule } from './alunos-routing.module';

import {AlunoPesquisarComponent} from './components/aluno-pesquisar/aluno-pesquisar.component';



@NgModule({
    declarations: [AlunosComponent, AlunoCadastrarComponent, AlunoPesquisarComponent],
    imports: [
        SharedModule,
        AlunosRoutingModule
    ],
    entryComponents:[
      
    ]
})

export class AlunosModule { }



