import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PesquisadorComponent } from './pesquisador.component';

const routes: Routes = [{ path: '', component: PesquisadorComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PesquisadorRoutingModule { }
