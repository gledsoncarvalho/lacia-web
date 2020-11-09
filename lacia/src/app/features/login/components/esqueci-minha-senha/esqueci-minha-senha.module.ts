import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { EsqueciMinhaSenhaRoutingModule } from './esqueci-minha-senha-routing.module';
import { EsqueciMinhaSenhaComponent } from './esqueci-minha-senha.component';


@NgModule({
  declarations: [EsqueciMinhaSenhaComponent],
  imports: [
    SharedModule,
    EsqueciMinhaSenhaRoutingModule
  ]
})
export class EsqueciMinhaSenhaModule { }
