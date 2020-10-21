import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AlertComponent } from './../../../../shared/components/alert/alert.component';
import { MeuPerfil } from './../../meu-perfil';



@Component({
  selector: 'app-meu-perfil-editar-modal',
  templateUrl: './meu-perfil-editar-modal.component.html',
  styleUrls: ['./meu-perfil-editar-modal.component.css']
})
export class MeuPerfilEditarModalComponent implements OnInit {

  MeuPerfilForm: FormGroup;
  perfil: MeuPerfil = {} as MeuPerfil;

  constructor(

    private fb: FormBuilder,
    private dialogRef: MatDialogRef<MeuPerfilEditarModalComponent>,
    private alert: AlertComponent,
    @Inject(MAT_DIALOG_DATA) meuPerfil: MeuPerfil) {
    this.perfil = meuPerfil;
    this.criarForm(meuPerfil);
  }



  ngOnInit(): void { }
  criarForm(meuPerfil: MeuPerfil) {
    this.MeuPerfilForm = this.fb.group({
      nomeMeuPerfil: [meuPerfil.nomeMeuPerfil, Validators.required],
      emailMeuPerfil: [meuPerfil.emailMeuPerfil, [Validators.required, Validators.email]],
      telefoneMeuPerfil: [meuPerfil.telefoneMeuPerfil, Validators.required],
      dtNascimentoMeuPerfil: [meuPerfil.dtNascimentoMeuPerfil, Validators.required],
      cpfMeuPerfil: [meuPerfil.cpfMeuPerfil]

    });


  }
  atualizarMeuPerfil() {
    if (this.MeuPerfilForm.valid) {
      this.alert.show("Atualizado!", "O dados foram atualizados com sucesso!", "success");
      this.perfil = this.MeuPerfilForm.value;
      this.dialogRef.close(this.perfil);
    } else {
      this.alert.show("Aviso", "Favor preencher os campos obrigatórios", "warning");
    }
  }
}
