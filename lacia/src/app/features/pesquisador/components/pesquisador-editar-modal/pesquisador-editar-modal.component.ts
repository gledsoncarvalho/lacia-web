import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { MyErrorStateMatcher } from '../pesquisador-cadastrar/pesquisador-cadastrar.component';
import { Pesquisador } from '../../pesquisador';
import Swal from 'sweetalert2';
import { AlertComponent } from 'src/app/shared/components/alert/alert.component';

@Component({
  selector: 'app-pesquisador-editar-modal',
  templateUrl: './pesquisador-editar-modal.component.html',
  styleUrls: ['./pesquisador-editar-modal.component.css']
})
export class PesquisadorEditarModalComponent implements OnInit {

  pesquisadorForm: FormGroup;
  matcher = new MyErrorStateMatcher();

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<PesquisadorEditarModalComponent>,
    private alert: AlertComponent,
    @Inject(MAT_DIALOG_DATA) pesquisador: Pesquisador) {
    this.criarForm(pesquisador);
  }

  ngOnInit(): void { }

  criarForm(pesquisador: Pesquisador) {
    this.pesquisadorForm = this.fb.group({
      nome: [pesquisador.nomePesquisador, Validators.required],
      dsEmail: [pesquisador.emailPesquisador, [Validators.required, Validators.email]],
      telefone: [pesquisador.telefonePesquisador, Validators.required],
      dtNascimento: [pesquisador.dtNascimentoPesquisador, Validators.required],
      cpf: [pesquisador.cpf, Validators.required]
    });
  }

  atualizarPesquisador() {
    this.alert.show("Atualizado!", "O pesquisador foi atualizado com sucesso!", "success");
    this.dialogRef.close();
  }

}
