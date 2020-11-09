import { NgModule} from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { SubmeterProjetoComponent } from './submeter-projeto.component';
import { SubmeterProjetoRoutingModule } from './submeter-projeto-routing.module';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
    declarations: [SubmeterProjetoComponent],
    imports: [
        SharedModule,
        SubmeterProjetoRoutingModule,
        HttpClientModule
    ]
})

export class SubmeterProjetoModule { }



