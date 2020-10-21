import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { SolicitarAcessoPesquisadorModalComponent } from './components/solicitar-acesso-pesquisador-modal/solicitar-acesso-pesquisador-modal.component';


@NgModule({
  declarations: [LoginComponent, SolicitarAcessoPesquisadorModalComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    SharedModule
  ],
  entryComponents: [
    SolicitarAcessoPesquisadorModalComponent
  ]
})
export class LoginModule { }
