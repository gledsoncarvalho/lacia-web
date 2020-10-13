import { AlunosComponent } from './alunos.component';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes_aluno: Routes = [{ path:'', component: AlunosComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes_aluno)],
    exports: [RouterModule]
})

export class AlunosRoutingModule{}


