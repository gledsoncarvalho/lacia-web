import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Coordenador } from '../../coordenador';
import { MyErrorStateMatcher } from '../coordenador-cadastrar/coordenador-cadastrar.component';
import Swal from 'sweetalert2';
import { AlertComponent } from 'src/app/shared/components/alert/alert.component';

@Component({
  selector: 'app-coordenador-editar-modal',
  templateUrl: './coordenador-editar-modal.component.html',
  styleUrls: ['./coordenador-editar-modal.component.css']
})
export class CoordenadorEditarModalComponent implements OnInit {

  coordenadorForm: FormGroup;
  matcher = new MyErrorStateMatcher();

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<CoordenadorEditarModalComponent>,
    private alert: AlertComponent,
    @Inject(MAT_DIALOG_DATA) coordenador: Coordenador) {
    this.criarForm(coordenador);
  }

  ngOnInit(): void { }

  criarForm(coordenador: Coordenador) {
    this.coordenadorForm = this.fb.group({
      nome: [coordenador.nomeCoordenador, Validators.required],
      dsEmail: [coordenador.emailCoordenador, [Validators.required, Validators.email]],
      telefone: [coordenador.telefoneCoordenador, Validators.required],
      dtNascimento: [coordenador.dtNascimentoCoordenador, Validators.required],
      cpf: [coordenador.cpf, Validators.required]
    });
  }

  atualizarCoordenador() {
    this.alert.show("Atualizado!", "O coordenador foi atualizado com sucesso!", "success");
    this.dialogRef.close();
  }

}
