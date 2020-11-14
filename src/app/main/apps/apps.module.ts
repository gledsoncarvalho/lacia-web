import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FuseSharedModule } from '@fuse/shared.module';


const routes = [
    {
        path: 'aluno',
        loadChildren: () => import('./alunos/alunos.module').then(m => m.AlunosModule)
    },
    {
        path: 'coordenador',
        loadChildren: () => import('./coordenador/coordenador.module').then(m => m.CoordenadorModule)
    },
    {
        path: 'projetos',
        loadChildren: () => import('./projeto/projeto.module').then(m => m.ProjetoModule)
    },
    {
        path: 'pesquisador',
        loadChildren: () => import('./pesquisador/pesquisador.module').then(m => m.PesquisadorModule)
    },
    {
        path: 'meu-perfil',
        loadChildren: () => import('./meu-perfil/meu-perfil.module').then(m => m.MeuPerfilModule)
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
