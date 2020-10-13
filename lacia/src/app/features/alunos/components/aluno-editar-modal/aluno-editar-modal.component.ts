import { Alunos } from './../../alunos';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { MyErrorStateMatcher } from '../aluno-cadastrar/aluno-cadastrar.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-aluno-editar-modal',
  templateUrl: './aluno-editar-modal.component.html',
  styleUrls: ['./aluno-editar-modal.component.css']
})
export class AlunoEditarModalComponent implements OnInit {

    alunosForm: FormGroup;
    matcher = new MyErrorStateMatcher();
  
  constructor(
    private fb : FormBuilder,
    private dialogRef: MatDialogRef<AlunoEditarModalComponent>,
    @Inject(MAT_DIALOG_DATA) aluno: Alunos){
      this.criarForm(aluno);
    }

  ngOnInit(): void {}

  criarForm(aluno : Alunos){
    this.alunosForm = this.fb.group({
      nomeAluno:[aluno.nomeAluno,Validators.required],
      emailAluno:[aluno.emailAluno,[Validators.required,Validators.email]],
      telefoneAluno:[aluno.telefoneAluno,Validators.required],
      dtNascimentoAluno: [aluno.dtNascimentoAluno,Validators.required],
      cpfAluno:[aluno.cpfAluno,Validators.required]

    });
  }
  atualizarAluno(){
    Swal.fire(
      'Atualizado!',
      'O aluno foi atualizado com sucesso!',
      'success'
    );
    this.dialogRef.close();
  }

}
