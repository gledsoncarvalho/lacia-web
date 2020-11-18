import { Pesquisador } from './../../pesquisador';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AlertComponent } from '@fuse/components/alert/alert.component';
import { AprovarPesquisador } from './aprovar-pesquisador';
import { MatTableDataSource } from '@angular/material/table';

const ELEMENT_DATA: AprovarPesquisador[] = [
    { nome: 'Diego Alves Ribeiro', email: 'diego@souunit.com.br', telefone: '(79) 9 9999-9999', data: new Date(1999, 9, 19), acao: '' },
    { nome: 'Francisco Carvalho', email: 'Francisco@souunit.com.br', telefone: '(79) 9 9999-9999', data: new Date(2001, 5, 30), acao: '' },
    { nome: 'Gledson Carvalho', email: 'Gledson@souunit.com.br', telefone: '(79) 9 9999-9999', data: new Date(1900, 4, 20), acao: '' },

];

@Component({
    selector: 'app-aprovar-pesquisador',
    templateUrl: './aprovar-pesquisador.component.html',
    styleUrls: ['./aprovar-pesquisador.component.css']
})
export class AprovarPesquisadorComponent implements OnInit {
    displayedColumns: string[] = ['nome', 'email', 'telefone', 'data', 'acao'];
    dataSource = ELEMENT_DATA;
    pesquisadores: MatTableDataSource<Pesquisador> = new MatTableDataSource();

    applyFilter(event: Event): void {
        const filterValue = (event.target as HTMLInputElement).value;
        this.pesquisadores.filter = filterValue.trim().toLowerCase();
      }

    constructor(private dialog: MatDialog, private alert: AlertComponent) { }

    ngOnInit(): void { }

    ReprovarPesquisador() {
        this.alert.confirmacao("Deseja reprovar este pesquisador?", "", "Confirmar", "O pesquisador foi reprovado!", "Reprovado");
    }

    AprovarPesquisador() {
        this.alert.show("Aprovado!", "O pesquisador foi aprovado com sucesso!", "success");
    }
}
