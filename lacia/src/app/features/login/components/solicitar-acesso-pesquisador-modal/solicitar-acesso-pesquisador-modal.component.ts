import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AlertComponent } from 'src/app/shared/components/alert/alert.component';
import { MyErrorStateMatcher } from '../../login.component';

@Component({
  selector: 'app-solicitar-acesso-pesquisador-modal',
  templateUrl: './solicitar-acesso-pesquisador-modal.component.html',
  styleUrls: ['./solicitar-acesso-pesquisador-modal.component.css']
})
export class SolicitarAcessoPesquisadorModalComponent implements OnInit {

  solicitacaoAcessoPesquisadorForm: FormGroup;
  matcher = new MyErrorStateMatcher();

  constructor(
    private fb: FormBuilder,
    private alert: AlertComponent,
    private dialogRef: MatDialogRef<SolicitarAcessoPesquisadorModalComponent>) { }

  ngOnInit(): void {
    this.criarForm();
  }

  criarForm() {
    this.solicitacaoAcessoPesquisadorForm = this.fb.group(
      {
        nomePesquisador: [null, Validators.required],
        emailPesquisador: [null, [Validators.required, Validators.email]],
        telefonePesquisador: [null, Validators.required],
        dtNascimentoPesquisador: [null, Validators.required]
      }
    )
  }

  solicitarAcessoPesquisador() {
    if (this.solicitacaoAcessoPesquisadorForm.valid) {
      this.dialogRef.close();
      this.alert.show("Solicitação", "Soliciação efetuada com sucesso", "success");
    } else {
      this.alert.show("Aviso", "Favor preencher os campos obrigatórios", "warning");
    }
  }

}
