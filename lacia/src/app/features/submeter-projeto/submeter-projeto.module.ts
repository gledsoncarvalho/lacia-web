import { NgModule} from '@angular/core';
import { SharedModule } from './../../shared/shared.module';
import { SubmeterProjetoComponent } from './submeter-projeto.component';
import { SubmeterProjetoRoutingModule } from './submeter-projeto-routing.module';


@NgModule({
    declarations: [SubmeterProjetoComponent],
    imports: [
        SharedModule,
        SubmeterProjetoRoutingModule
    ]
})

export class SubmeterProjetoModule { }



