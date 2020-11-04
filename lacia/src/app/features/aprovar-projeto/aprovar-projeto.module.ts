import { NgModule } from '@angular/core';
import { SharedModule } from './../../shared/shared.module';

import { AprovarProjetoRoutingModule } from './aprovar-projeto-routing.module';
import { AprovarProjetoComponent } from './aprovar-projeto.component';
import { AprovarProjetoModalComponent } from './components/aprovar-projeto-modal/aprovar-projeto-modal.component';


@NgModule({
  declarations: [AprovarProjetoComponent, AprovarProjetoModalComponent],
  imports: [
    SharedModule,
    AprovarProjetoRoutingModule
  ],
  entryComponents:[ AprovarProjetoModalComponent ]
})
export class AprovarProjetoModule { }
