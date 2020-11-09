import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core'
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AlertComponent } from 'src/app/shared/components/alert/alert.component';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


@Component({
  selector: 'app-esqueci-minha-senha',
  templateUrl: './esqueci-minha-senha.component.html',
  styleUrls: ['./esqueci-minha-senha.component.css']
})


export class EsqueciMinhaSenhaComponent implements OnInit {

  @Output() autenticado:EventEmitter<any> = new EventEmitter();
  matcher = new MyErrorStateMatcher();
  esqueci_minha_senha: FormGroup;

  loading = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private alert: AlertComponent,
    private dialog: MatDialog){}

  ngOnInit(): void {
    this.criarForm();
  }

  criarForm(){  
    this.esqueci_minha_senha = this.fb.group({
      email:[null,[Validators.required,Validators.email]]
    });
  }
  
  enviarSenha(){
    this.loading =true;
    if(this.esqueci_minha_senha.valid){
      /*this.router.navigateByUrl("/main/coordenador");*/
      this.autenticado.emit();
    }else{
      this.alert.show("Aviso","Favor preencher os campos obrigatórios", "warning");
      this.loading = false;
    }
  }
  
  AtualizarSenha() {
    if (this.esqueci_minha_senha.valid) {
      this.alert.show("Email enviado!", "Email foi enviado com sucesso!", "success");
    } else {
      this.alert.show("Aviso", "Favor preencher o campo obrigatórios", "warning");
    }
  }

  voltarTelaLogin(){
    this.router.navigateByUrl("/");
  }


}
