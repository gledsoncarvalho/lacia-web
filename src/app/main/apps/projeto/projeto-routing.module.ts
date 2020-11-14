import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjetoComponent } from './projeto.component';


const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '', redirectTo: 'submeter', pathMatch: 'full'
            },
            {
                path: 'submeter', loadChildren: () => import('./components/submeter-projeto/submeter-projeto.module').then(m => m.SubmeterProjetoModule)
            },
            {
                path: 'meus', loadChildren: () => import('./components/meu-projeto/meu-projeto.module').then(m => m.MeuProjetoModule)
            },
            {
                path: 'aprovar', loadChildren: () => import('./components/aprovar-projeto/aprovar-projeto.module').then(m => m.AprovarProjetoModule)
            },
            {
                path: 'cadastrados', loadChildren: () => import('./components/projeto-cadastrado/projeto-cadastrado.module').then(m => m.ProjetoCadastradoModule)
            },
            {
                path: 'tarefas', loadChildren: () => import('./components/scrumboard/scrumboard.module').then(m => m.ScrumboardModule)
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProjetoRoutingModule { }
