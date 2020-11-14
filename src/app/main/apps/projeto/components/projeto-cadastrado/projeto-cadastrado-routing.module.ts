import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjetoCadastradoComponent } from './projeto-cadastrado.component';

const routes: Routes = [
    {
        path: '',
        component: ProjetoCadastradoComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProjetoCadastradoRoutingModule { }
