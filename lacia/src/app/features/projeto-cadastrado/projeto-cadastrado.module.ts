import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProjetoCadastradoComponent } from './projeto-cadastrado.component';
import { ProjetoCadastradoRoutingModule } from './projeto-cadastrado-routing.module';


@NgModule({
  declarations: [ProjetoCadastradoComponent],
  imports: [
    SharedModule,
    ProjetoCadastradoRoutingModule
  ],
  entryComponents: [
  ]
  
})

export class ProjetoCadastradoModule{} 
