import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FuseSharedModule } from '../../../../../../@fuse/shared.module';
import { SubmeterProjetoRoutingModule } from './submeter-projeto-routing.module';
import { SubmeterProjetoComponent } from './submeter-projeto.component';

@NgModule({
    declarations: [SubmeterProjetoComponent],
    imports: [
        FuseSharedModule,
        SubmeterProjetoRoutingModule,
        HttpClientModule
    ]
})

export class SubmeterProjetoModule { }



