import { NgModule } from '@angular/core';
import { AprovarProjetoRoutingModule } from './aprovar-projeto-routing.module';
import { AprovarProjetoComponent } from './aprovar-projeto.component';
import { AprovarProjetoModalComponent } from './components/aprovar-projeto-modal/aprovar-projeto-modal.component';
import { FuseSharedModule } from '../../../../../../@fuse/shared.module';



@NgModule({
    declarations: [
        AprovarProjetoComponent, 
        AprovarProjetoModalComponent
    ],
    imports: [
        FuseSharedModule,
        AprovarProjetoRoutingModule
    ],
    entryComponents: [AprovarProjetoModalComponent]
})
export class AprovarProjetoModule { }
