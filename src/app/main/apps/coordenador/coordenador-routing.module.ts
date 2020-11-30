import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoordenadorComponent } from './coordenador.component';
import { PermissaoGuard } from '../../guards/permissao.guard';

const routes: Routes = [
    { 
        path: '', 
        data: {
            permissions: ['C']  
        },
        canActivateChild: [PermissaoGuard],
        children: [
            {
                path: '',
                component: CoordenadorComponent
            }
        ]
     }
    ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoordenadorRoutingModule { }
