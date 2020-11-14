import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubmeterProjetoComponent } from './submeter-projeto.component';

const routes: Routes = [
    { path: '', component: SubmeterProjetoComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class SubmeterProjetoRoutingModule { }


