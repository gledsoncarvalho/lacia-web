import { Pesquisador } from './../../pesquisador';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AlertComponent } from '@fuse/components/alert/alert.component';

@Component({
  selector: 'app-pesquisador-pesquisar',
  templateUrl: './pesquisador-pesquisar.component.html',
  styleUrls: ['./pesquisador-pesquisar.component.css']
})
export class PesquisadorPesquisarComponent implements OnInit {

  pesquisadorForm: FormGroup;
  colunasTable: string[] = ['nomePesquisador', 'emailPesquisador','telefonePesquisador', 'dtNascimentoPesquisador',  'acoes',];
  pesquisadores: MatTableDataSource<Pesquisador> = new MatTableDataSource();

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.pesquisadores.filter = filterValue.trim().toLowerCase();
  }


  constructor(private fb: FormBuilder, private dialog: MatDialog, private alert: AlertComponent) { }

  ngOnInit(): void {
    this.criarForm();
    this.pesquisadores.data.push({nomePesquisador: "Vinícius Mendonça", emailPesquisador: "vinicius.jose@souunit.com.br", telefonePesquisador: "79 9 9999-9999", dtNascimentoPesquisador: new Date(1998, 9, 18), cpf: "111.111.111-11" } as Pesquisador);
    this.pesquisadores.data.push({nomePesquisador: "Diego Ribeiro", emailPesquisador: "diego.ribeiro@souunit.com.br", telefonePesquisador: "79 9 9999-9999", dtNascimentoPesquisador: new Date(1999, 9, 19), cpf: "111.111.111-11" } as Pesquisador);
  }

  criarForm() {
    this.pesquisadorForm = this.fb.group({
      nomePesquisador: [null],
      emailPesquisador: [null]
    })
  }

  excluirPesquisador() {
    this.alert.confirmacao("Você deseja realmente fazer isso?", "Você pode reverter isso!", "Confirmar", "O pesquisador foi excluído.");
  }
}
