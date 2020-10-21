import { MeuPerfilComponent } from './meu-perfil.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{path:'',component:MeuPerfilComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MeuPerfilRoutingModule { }
