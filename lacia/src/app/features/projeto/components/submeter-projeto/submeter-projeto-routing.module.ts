import { SubmeterProjetoComponent } from './submeter-projeto.component';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [{ path:'', component: SubmeterProjetoComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class SubmeterProjetoRoutingModule{}


