import { NgModule} from '@angular/core';
import { SharedModule } from './../../shared/shared.module';
import { MeuProjetoComponent } from './meu-projeto.component';
import { MeuProjetoRoutingModule } from './meu-projeto-routing.module';




@NgModule({
    declarations: [MeuProjetoComponent],
    imports: [
        SharedModule,
        MeuProjetoRoutingModule
    ]/*,
    entryComponents:[
        AlunoEditarModalComponent
    ]*/
})

export class MeuProjetoModule { }



