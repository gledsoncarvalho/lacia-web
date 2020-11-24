import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjetoComponent } from './projeto.component';
import { ProjetosGuard } from '../../guards/projetos.guard';


const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '', redirectTo: 'submeter', pathMatch: 'full'
            },
            {
                path: 'submeter', loadChildren: () => import('./components/submeter-projeto/submeter-projeto.module').then(m => m.SubmeterProjetoModule),
                data: {
                    permissions: ['C', 'P']  
                },
                canActivateChild: [ProjetosGuard]
            },
            {
                path: 'meus', loadChildren: () => import('./components/meu-projeto/meu-projeto.module').then(m => m.MeuProjetoModule),
                data: {
                    permissions: ['C', 'P']  
                },
                canActivateChild: [ProjetosGuard]
            },
            {
                path: 'aprovar', loadChildren: () => import('./components/aprovar-projeto/aprovar-projeto.module').then(m => m.AprovarProjetoModule),
                data: {
                    permissions: ['C']  
                },
                canActivateChild: [ProjetosGuard]
            },
            {
                path: 'cadastrados', loadChildren: () => import('./components/projeto-cadastrado/projeto-cadastrado.module').then(m => m.ProjetoCadastradoModule),
                data: {
                    permissions: ['C', 'P']  
                },
                canActivateChild: [ProjetosGuard]
            },
            {
                path: 'tarefas', loadChildren: () => import('./components/scrumboard/scrumboard.module').then(m => m.ScrumboardModule),
                data: {
                    permissions: ['C', 'P', 'A']  
                },
                canActivateChild: [ProjetosGuard]
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProjetoRoutingModule { }
