import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AprovarPesquisadorComponent } from './aprovar-pesquisador.component';

const routes: Routes = [
  {
    path: '', component: AprovarPesquisadorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AprovarPesquisadorRoutingModule { }
