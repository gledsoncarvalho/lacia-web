import { AlertComponent } from './../../../../../../@fuse/components/alert/alert.component';
import { ProjetoService } from './../../../../services/projeto.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Projeto } from 'app/main/models/projeto.model';
import { Status } from '../../../../../../@fuse/enums/status.enum';


@Component({
  selector: 'app-meu-projeto',
  templateUrl: './meu-projeto.component.html',
  styleUrls: ['./meu-projeto.component.css']
})

export class MeuProjetoComponent implements OnInit {
  displayedColumns: string[] = [ 'nomeMeuProjeto', 'orcamentoMeuProjeto', 'dtInicioMeuProjeto', 'dtFimMeuProjeto', 'situacaoMeuProjeto', 'acoes'];
  projetos: MatTableDataSource <Projeto> = new MatTableDataSource();
  status = Status; 
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.projetos.filter = filterValue.trim().toLowerCase();
  }
  constructor(
    private projetoService: ProjetoService, 
    private alert: AlertComponent){ }


  ngOnInit(): void { 
    this.projetos.filterPredicate = (projeto: Projeto, filter: string) => {
      return filter.includes("todos") ? true : projeto.aprovado == JSON.parse(filter); 
    }
    this.obterProjetos();
  }

  filtrarProjetos(status: boolean, todos?: boolean) {
    this.projetos.filter = todos ? "todos" : String(status);
    this.projetos._updateChangeSubscription();
  }

  obterProjetos(){
    this.projetoService.obterProjetosPorUsuario(sessionStorage.getItem("email"))
      .subscribe(projetos => {
        this.projetos.data = projetos;
      }, error => this.alert.show("Erro!", "Não foi possível obter seus projetos", "error"))
  }

  getSituacao(aprovado: boolean): string{
    switch(aprovado){
      case true:
        return "Aprovado";
      case false:
        return "Reprovado";
      default:
        return "Em espera";
    }
  }
}
