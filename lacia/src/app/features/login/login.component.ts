import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AlertComponent } from './../../shared/components/alert/alert.component';
import { SolicitarAcessoPesquisadorModalComponent } from './components/solicitar-acesso-pesquisador-modal/solicitar-acesso-pesquisador-modal.component';


/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() autenticado: EventEmitter<any> = new EventEmitter();
  matcher = new MyErrorStateMatcher();
  login: FormGroup;

  loading = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private alert: AlertComponent,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.criarForm();
  }

  criarForm() {
    this.login = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      senha: [null, Validators.required]
    });
  }

  logar() {
    this.loading = true;
    if (this.login.valid) {
      this.router.navigateByUrl("/main/coordenador");
      this.autenticado.emit();
    } else {
      this.alert.show("Aviso", "Favor preencher os campos obrigatórios", "warning");
      this.loading = false;
    }
  }
  entrar_esqueci_minha_senha(){
    this.router.navigateByUrl("/esqueci-minha-senha");
  }

  solicitarAcessoPesquisador() {
    this.dialog.open(SolicitarAcessoPesquisadorModalComponent);
  }
}
