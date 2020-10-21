import { NgModule } from '@angular/core';
import { SharedModule } from './../../shared/shared.module';
import { MeuPerfilRoutingModule } from './meu-perfil-routing.module';
import { MeuPerfilComponent } from './meu-perfil.component';
import { MeuPerfilEditarModalComponent } from './components/meu-perfil-editar-modal/meu-perfil-editar-modal.component';


@NgModule({
  declarations: [MeuPerfilComponent, MeuPerfilEditarModalComponent ],
  imports: [
    SharedModule,
    MeuPerfilRoutingModule
  ]
})
export class MeuPerfilModule { }
