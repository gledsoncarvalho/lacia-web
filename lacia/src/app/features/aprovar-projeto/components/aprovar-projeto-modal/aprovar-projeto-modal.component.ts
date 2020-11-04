import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AlertComponent } from 'src/app/shared/components/alert/alert.component';
import { AprovarProjeto } from './../../aprovar-projeto'

@Component({
  selector: 'app-aprovar-projeto-modal',
  templateUrl: './aprovar-projeto-modal.component.html',
  styleUrls: ['./aprovar-projeto-modal.component.css']
})
export class AprovarProjetoModalComponent implements OnInit {

  aprovarProjetoForm: FormGroup;

  constructor(
    private fb : FormBuilder,
    private dialogRef: MatDialogRef<AprovarProjetoModalComponent>,
    private alert: AlertComponent,
    @Inject(MAT_DIALOG_DATA) projeto: AprovarProjeto){
      this.criarForm(projeto);
      console.log(projeto);
    }

  ngOnInit(): void {
  }

  criarForm(projeto : AprovarProjeto){
    this.aprovarProjetoForm = this.fb.group({
      idAprovarProjeto:[projeto.idAprovarProjeto,Validators.required],
      nomeAprovarProjeto:[projeto.nomeAprovarProjeto,[Validators.required]],
      orcamentoAprovarProjeto:[projeto.orcamentoAprovarProjeto,Validators.required],
      dtInicioAprovarProjeto: [projeto.dtInicioAprovarProjeto,Validators.required],
      dtFimAprovarProjeto:[projeto.dtFimAprovarProjeto,Validators.required],
      descricaoAprovarProjeto:[projeto.descricaoAprovarProjeto, Validators.required]
    });
  }

  aprovarProjeto(){
    this.alert.show("Aprovado!", "O projeto foi aprovado com sucesso!", "success");
    this.dialogRef.close();
  }

  reprovarProjeto(){
    this.alert.confirmacao("Você deseja reprovar este projeto?", "Você pode reverter isso!", "Confirmar", "O projeto foi reprovado!");
  }
}
