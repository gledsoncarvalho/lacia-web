import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PesquisadorComponent } from './pesquisador.component';
import { PermissaoGuard } from '../../guards/permissao.guard';

const routes: Routes = [
    {
        path: '',
        data: {
            permissions: ['C', 'P']  
        },
        canActivateChild: [PermissaoGuard],
        children: [
            {
                path: '', 
                component: PesquisadorComponent
            },
        ]
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PesquisadorRoutingModule { }
