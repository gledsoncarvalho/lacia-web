import { NgModule } from '@angular/core';
import { SharedModule } from './../../shared/shared.module';
import { MeuPerfilRoutingModule } from './meu-perfil-routing.module';
import { MeuPerfilComponent } from './meu-perfil.component';


@NgModule({
  declarations: [MeuPerfilComponent],
  imports: [
    SharedModule,
    MeuPerfilRoutingModule
  ]
})
export class MeuPerfilModule { }
