import { Component, OnInit } from '@angular/core';
import { AprovarPesquisador} from './aprovar-pesquisador'
import { AlertComponent } from 'src/app/shared/components/alert/alert.component';
import { MatDialog } from '@angular/material/dialog';

const ELEMENT_DATA: AprovarPesquisador[] = [
  { nome: 'Diego Alves Ribeiro', email: 'diego@souunit.com.br', telefone: '(79) 9 9999-9999', data: new Date(1999, 9, 19), acao: 'H'},
  { nome: 'Francisco Carvalho', email: 'Francisco@souunit.com.br', telefone:'(79) 9 9999-9999', data: new Date(2001, 5, 30), acao: ''},
  { nome: 'Gledson Carvalho', email: 'Gledson@souunit.com.br', telefone:'(79) 9 9999-9999', data: new Date(1900, 4, 20), acao: ''},

];

@Component({
  selector: 'app-aprovar-pesquisador',
  templateUrl: './aprovar-pesquisador.component.html',
  styleUrls: ['./aprovar-pesquisador.component.css']
})
export class AprovarPesquisadorComponent implements OnInit { 
  displayedColumns: string[] = [ 'nome', 'email', 'telefone', 'data', 'acao'];
  dataSource = ELEMENT_DATA;

  constructor(private dialog: MatDialog, private alert: AlertComponent) { }

  ngOnInit(): void {
  }

  ReprovarPesquisador(){
    this.alert.confirmacao("Você deseja reprovar este pesquisador?", "Você pode reverter isso!", "Confirmar", "O pesquisador foi reprovado!");
  }

  AprovarPesquisador(){
    this.alert.show("Aprovado!", "O pesquisador foi aprovado com sucesso!", "success");
  }
}
