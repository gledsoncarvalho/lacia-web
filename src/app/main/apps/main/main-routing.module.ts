import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';

const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
      { path: '', redirectTo: 'coordenador', pathMatch: 'full' },
      { path: 'coordenador', loadChildren: () => import('../coordenador/coordenador.module').then(m => m.CoordenadorModule) },
      { path: 'pesquisador', loadChildren: () => import('../pesquisador/pesquisador.module').then(m => m.PesquisadorModule) },
      { path: 'alunos', loadChildren: () => import('../alunos/alunos.module').then(m => m.AlunosModule) },
      { path: 'meu-perfil', loadChildren: () => import('../meu-perfil/meu-perfil.module').then(m => m.MeuPerfilModule) },
      { path: 'esqueci-minha-senha', loadChildren: () => import('../login/components/esqueci-minha-senha/esqueci-minha-senha.module').then(m => m.EsqueciMinhaSenhaModule) },
      { path: 'submeter-projeto', loadChildren: () => import('../projeto/components/submeter-projeto/submeter-projeto.module').then(m => m.SubmeterProjetoModule) },
      { path: 'meu-projeto', loadChildren: () => import('../projeto/components/meu-projeto/meu-projeto.module').then(m => m.MeuProjetoModule) },
      { path: 'aprovar-projeto', loadChildren: () => import('../projeto/components/aprovar-projeto/aprovar-projeto.module').then(m => m.AprovarProjetoModule) },
      { path: 'projeto-cadastrado', loadChildren: () => import('../projeto/components/projeto-cadastrado/projeto-cadastrado.module').then(m => m.ProjetoCadastradoModule) },
      { path: 'aprovar-projeto', loadChildren: () => import('../projeto/components/aprovar-projeto/aprovar-projeto.module').then(m => m.AprovarProjetoModule) },
      { path: 'aprovar-pesquisador', loadChildren: () => import('../pesquisador/components/aprovar-pesquisador/aprovar-pesquisador.module').then(m => m.AprovarPesquisadorModule) },
      { path: 'projeto', loadChildren: () => import('../projeto/projeto.module').then(m => m.ProjetoModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class MainRoutingModule { }
