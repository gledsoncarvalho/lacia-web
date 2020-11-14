import { AprovarProjetoComponent } from './aprovar-projeto.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path:'', component: AprovarProjetoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AprovarProjetoRoutingModule{}
