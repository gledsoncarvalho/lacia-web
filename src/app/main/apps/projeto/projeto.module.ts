import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FuseSharedModule } from '../../../../@fuse/shared.module';
import { ProjetoRoutingModule } from './projeto-routing.module';
import { ProjetoComponent } from './projeto.component';



@NgModule({
    declarations: [ProjetoComponent],
    imports: [
        CommonModule,
        FuseSharedModule,
        ProjetoRoutingModule
    ]
})
export class ProjetoModule { }
