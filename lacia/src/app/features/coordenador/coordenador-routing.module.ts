import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoordenadorComponent } from './coordenador.component';

const routes: Routes = [{ path: '', component: CoordenadorComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoordenadorRoutingModule { }
