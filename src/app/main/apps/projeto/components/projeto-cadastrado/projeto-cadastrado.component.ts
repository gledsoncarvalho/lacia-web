import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ProjetoCadastrado } from './projeto-cadastrado';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { Status } from '@fuse/enums/status.enum';


const ELEMENT_DATA: ProjetoCadastrado[] = [
  { idProjetoCadastrado: 3, nomeProjetoCadastrado: "Lacia", orcamentoProjetoCadastrado: "500,50", dtInicioProjetoCadastrado: new Date(), dtFimProjetoCadastrado: new Date(), descricaoProjetoCadastrado: "Projeto voltado para gestao de projetos" },
  { idProjetoCadastrado: 4, nomeProjetoCadastrado: "Composto V", orcamentoProjetoCadastrado: "50000,33", dtInicioProjetoCadastrado: new Date(), dtFimProjetoCadastrado: new Date(), descricaoProjetoCadastrado: "Um projeto para mudar o mundo como conhecemos" },
  { idProjetoCadastrado: 5, nomeProjetoCadastrado: "Projeto Chico", orcamentoProjetoCadastrado: "2000,90", dtInicioProjetoCadastrado: new Date(), dtFimProjetoCadastrado: new Date(), descricaoProjetoCadastrado: "Um projeto basicamente impossivel de resolver" },
];


@Component({
  selector: 'app-projeto-cadastrado',
  templateUrl: './projeto-cadastrado.component.html',
  styleUrls: ['./projeto-cadastrado.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class ProjetoCadastradoComponent implements OnInit {

  displayedColumns: string[] = ['nomeProjetoCadastrado', 'orcamentoProjetoCadastrado', 'dtInicioProjetoCadastrado', 'dtFimProjetoCadastrado'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  status = Status; 
  columnsToDisplay = ['nome', 'orcamento', 'data inicio', 'data fim'];
  dicionarioColunas: { [coluna: string]: string };
  mapColunas = new Map<string,string>(); 
  


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
  constructor(private router: Router) { 
    this.mapColunas.set('nomeProjetoCadastrado', 'Nome Projeto');
    this.mapColunas.set('orcamentoProjetoCadastrado', 'Orçamento');
    this.mapColunas.set('dtInicioProjetoCadastrado', 'Data inicio');
    this.mapColunas.set('dtFimProjetoCadastrado', 'Data fim');
  }

  ngOnInit(): void {
  }

  
}
