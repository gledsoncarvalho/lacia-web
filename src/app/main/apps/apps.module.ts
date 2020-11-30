import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FuseSharedModule } from '@fuse/shared.module';
import { AuthGuard } from '../guards/auth.guard';


const routes = [
    {
        path: 'aluno',
        loadChildren: () => import('./alunos/alunos.module').then(m => m.AlunosModule),
        canActivate: [AuthGuard]
    },
    {
        path: 'coordenador',
        loadChildren: () => import('./coordenador/coordenador.module').then(m => m.CoordenadorModule),
        canActivate: [AuthGuard]
    },
    {
        path: 'projetos',
        loadChildren: () => import('./projeto/projeto.module').then(m => m.ProjetoModule),
        canActivate: [AuthGuard]
    },
    {
        path: 'pesquisador',
        loadChildren: () => import('./pesquisador/pesquisador.module').then(m => m.PesquisadorModule),
        canActivate: [AuthGuard]
    },
    {
        path: 'meu-perfil',
        loadChildren: () => import('./meu-perfil/meu-perfil.module').then(m => m.MeuPerfilModule),
        canActivate: [AuthGuard]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        FuseSharedModule
    ]
})
export class AppsModule {
}
