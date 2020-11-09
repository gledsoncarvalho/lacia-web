import { MeuProjetoComponent } from './meu-projeto.component';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [{ path:'', component: MeuProjetoComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class MeuProjetoRoutingModule{}


