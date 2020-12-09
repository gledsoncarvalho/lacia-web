import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AlertComponent } from './../../../../../../@fuse/components/alert/alert.component';
import { Projeto } from './../../../../models/projeto.model';
import { ProjetoService } from './../../../../services/projeto.service';



@Component({
  selector: 'app-projeto-cadastrado',
  templateUrl: './projeto-cadastrado.component.html',
  styleUrls: ['./projeto-cadastrado.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class ProjetoCadastradoComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  menuIsOpen: boolean = false;
  displayedColumns: string[] = ['titulo', 'orcamento', 'dataInicio', 'dataFim', 'acoes'];
  projetos: MatTableDataSource<Projeto> = new MatTableDataSource();
  mapColunas = new Map<string, string>();


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.projetos.filter = filterValue.trim().toLowerCase();
  }

  constructor(
    private projetoService: ProjetoService,
    private alert: AlertComponent) {
    this.mapColunas.set('titulo', 'Título Projeto');
    this.mapColunas.set('orcamento', 'Orçamento');
    this.mapColunas.set('dataInicio', 'Data inicio');
    this.mapColunas.set('dataFim', 'Data fim');
    this.mapColunas.set('acoes', 'Ações');
  }

  ngOnInit(): void {
    this.obterTodosProjetosCadastrados();
  }

  ngAfterViewInit() {
    this.paginator._intl.itemsPerPageLabel = 'Itens por página';
    this.projetos.paginator = this.paginator;
  }

  menuOpened() {
    this.menuIsOpen = true;
  }

  menuClosed() {
    this.menuIsOpen = false;
  }

  obterTodosProjetosCadastrados() {
    this.projetoService.obterTodosProjetosCadastrados()
      .subscribe(projetos => {
        this.projetos.data = projetos;
      },
        error => this.alert.show("Erro!", "Não foi possível obter todos os projetos cadastrados", "error"));
  }

}
