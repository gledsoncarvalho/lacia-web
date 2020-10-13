import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Alunos } from './../../alunos';
import { Component, OnInit } from '@angular/core';
import{FormBuilder, FormGroup, Validators} from'@angular/forms';
import { AlunoEditarModalComponent } from './../aluno-editar-modal/aluno-editar-modal.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-aluno-pesquisar',
  templateUrl: './aluno-pesquisar.component.html',
  styleUrls: ['./aluno-pesquisar.component.css']
})
export class AlunoPesquisarComponent implements OnInit {

  alunosForm: FormGroup;
  colunasTable: string[] = ['idAluno', 'nomeAluno', 'emailAluno', 'acoes'];
  alunos: MatTableDataSource<Alunos> = new MatTableDataSource();


  constructor(private fb: FormBuilder, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.criarForm();
    this.alunos.data.push({ idAluno: 1, nomeAluno:"ChicoJ",emailAluno:"chicoj@frombrazil.com.br", telefoneAluno:"79998414129",dtNascimentoAluno: new Date(),cpfAluno:"111.111.111-11"} as Alunos);
    this.alunos.data.push({ idAluno: 2, nomeAluno:"BrennoJ",emailAluno:"brennoj@frombrazil.com.br", telefoneAluno:"7999526188",dtNascimentoAluno: new Date(),cpfAluno:"111.111.111-11"} as Alunos);

  }
  
  criarForm(){
    this.alunosForm = this.fb.group({
      nomeAluno: [null],
      emailAluno:[null]
    })
  }
  atualizarAluno(aluno: Alunos){
    let dialogRef = this.dialog.open(AlunoEditarModalComponent, {data: aluno});
    dialogRef.afterClosed().subscribe(resposta => {
      //ATUALIZAR GRID
    })
  }
  excluirAluno(){
    Swal.fire({
      title:'Voce deseja realmente fazer isso?',
      text:"Voce pode reverter isso!",
      icon:'warning',
      showCancelButton:true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor:'#d33',
      confirmButtonText:'Confirmar!'
    }).then((result) =>{
      if(result.isConfirmed){
        Swal.fire(
          'Deletado!',
          'O aluno foi excluido.',
          'success'
        );
      }
    })
  }
}
