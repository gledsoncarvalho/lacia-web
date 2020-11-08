import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { AlertComponent } from 'src/app/shared/components/alert/alert.component';
import { Alunos } from './../../alunos';

@Component({
  selector: 'app-aluno-pesquisar',
  templateUrl: './aluno-pesquisar.component.html',
  styleUrls: ['./aluno-pesquisar.component.css']
})
export class AlunoPesquisarComponent implements OnInit {

  alunosForm: FormGroup;
  colunasTable: string[] = ['idAluno', 'nomeAluno', 'emailAluno','telefoneAluno','dtNascimentoAluno', 'acoes'];
  alunos: MatTableDataSource<Alunos> = new MatTableDataSource();


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.alunos.filter = filterValue.trim().toLowerCase();
  }

  constructor(private fb: FormBuilder, private dialog: MatDialog, private alert: AlertComponent) { }

  ngOnInit(): void {
    this.criarForm();
    this.alunos.data.push({ idAluno: 1, nomeAluno:"Chico",emailAluno:"chico@gmail.com.br", telefoneAluno:"7999841412",dtNascimentoAluno: new Date(),cpfAluno:"111.111.111-11"} as Alunos);
    this.alunos.data.push({ idAluno: 2, nomeAluno:"Brenno",emailAluno:"brenno@gmail.com.br", telefoneAluno:"7999526188",dtNascimentoAluno: new Date(),cpfAluno:"111.111.111-11"} as Alunos);

  }
  
  criarForm(){
    this.alunosForm = this.fb.group({
      nomeAluno: [null],
      emailAluno:[null],
    })
  }

  excluirAluno(){
    this.alert.confirmacao("Você deseja realmente fazer isso?", "Você pode reverter isso!", "Confirmar", "O aluno foi excluído.");
  }
}
