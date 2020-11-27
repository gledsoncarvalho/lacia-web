import { AlunoService } from './../../../../services/aluno.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { AlertComponent } from '@fuse/components/alert/alert.component';
import { Aluno } from './../../../../models/aluno.model';


@Component({
  selector: 'app-aluno-pesquisar',
  templateUrl: './aluno-pesquisar.component.html',
  styleUrls: ['./aluno-pesquisar.component.css']
})
export class AlunoPesquisarComponent implements OnInit {

  alunosForm: FormGroup;
  colunasTable: string[] = ['nomeAluno', 'emailAluno','telefoneAluno','dtNascimentoAluno'];
  colunasTablePrioritaria: string[] = ['nomeAluno', 'emailAluno','telefoneAluno','dtNascimentoAluno', 'acoes'];
  alunos: MatTableDataSource<Aluno> = new MatTableDataSource();


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.alunos.filter = filterValue.trim().toLowerCase();
  }

  constructor(
    private fb: FormBuilder, 
    private alert: AlertComponent,
    private alunoService: AlunoService) { }

  ngOnInit(): void {
    this.criarForm();
    this.obterAlunos();

  }
  
  criarForm(){
    this.alunosForm = this.fb.group({
      nomeAluno: [null],
      emailAluno:[null],
    })
  }

  obterAlunos(){
      this.alunoService.obterAlunos()
        .subscribe(alunos => {
          this.alunos.data = alunos;
        }, erro => this.alert.show("Erro","Não foi possível obter os alunos!","error") )
  }

  excluirAluno(idUsuario: number, index: number) {
    this.alert.confirmacao("Deseja excluir o aluno?", "", "Confirmar", "O aluno foi excluído.", "Excluído")
      .then(() => {
        this.alunoService.excluirAluno(idUsuario)
          .subscribe(() => {
            this.alunos.data.splice(index, 1);
            this.alunos._updateChangeSubscription();
          })
      });
  }

  getTipoUsuario() {
    return sessionStorage.getItem('tipoUsuario');
}
}
