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
      { path: 'alunos', loadChildren: () => import('../alunos/alunos.module').then(m => m.AlunosModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class MainRoutingModule { }
