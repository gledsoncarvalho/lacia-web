import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Status } from './../../shared/enums/status.enum';
import { MeuProjeto } from './meu-projeto';


const ELEMENT_DATA: MeuProjeto[] = [
  {  nomeMeuProjeto: "Lacia", orcamentoMeuProjeto: "500,50", dtInicioMeuProjeto: new Date(), dtFimMeuProjeto: new Date(), situacaoMeuProjeto: "Aprovado" },
  {  nomeMeuProjeto: "Composto V", orcamentoMeuProjeto: "50000,33", dtInicioMeuProjeto: new Date(), dtFimMeuProjeto: new Date(), situacaoMeuProjeto: "Não aprovado" },
  { nomeMeuProjeto: "Projeto Chico", orcamentoMeuProjeto: "2000,90", dtInicioMeuProjeto: new Date(), dtFimMeuProjeto: new Date(), situacaoMeuProjeto: "Em espera" },
];

@Component({
  selector: 'app-meu-projeto',
  templateUrl: './meu-projeto.component.html',
  styleUrls: ['./meu-projeto.component.css']
})

export class MeuProjetoComponent implements OnInit {
  displayedColumns: string[] = [ 'nomeMeuProjeto', 'orcamentoMeuProjeto', 'dtInicioMeuProjeto', 'dtFimMeuProjeto', 'situacaoMeuProjeto', 'acoes'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  status = Status; 
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  constructor(private router: Router){ }


  ngOnInit(): void { }

  filtrarProjetos(status: Status.APROVADO | Status.REPROVADO | Status.AGUARDANDO) {
    console.log(status);
    this.dataSource.data = ELEMENT_DATA;
    this.dataSource.data = this.dataSource.data.filter(projeto => projeto.situacaoMeuProjeto === status);
    this.dataSource._updateChangeSubscription();
  }
  recarregarTela(){
    this.dataSource.data = ELEMENT_DATA;
  }
}
