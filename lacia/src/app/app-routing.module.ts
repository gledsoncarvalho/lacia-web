import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'coordenador' },
  { path: 'coordenador', loadChildren: () => import('./features/coordenador/coordenador.module').then(m => m.CoordenadorModule) },
  { path: 'pesquisador', loadChildren: () => import('./features/pesquisador/pesquisador.module').then(m => m.PesquisadorModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
