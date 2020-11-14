import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PesquisadorComponent } from './pesquisador.component';

const routes: Routes = [
    {
        path: '', 
        children: [
            {
                path: '', component: PesquisadorComponent
            },
            {
                path: 'aprovar-pesquisador', 
                loadChildren: () => import('./components/aprovar-pesquisador/aprovar-pesquisador.module').then(m => m.AprovarPesquisadorModule)
            }
        ]
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PesquisadorRoutingModule { }
