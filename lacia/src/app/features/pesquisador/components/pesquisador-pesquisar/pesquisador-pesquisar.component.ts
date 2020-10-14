import { Pesquisador } from './../../pesquisador';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { PesquisadorEditarModalComponent } from '../pesquisador-editar-modal/pesquisador-editar-modal.component';
import Swal from 'sweetalert2';
import { AlertComponent } from 'src/app/shared/components/alert/alert.component';

@Component({
  selector: 'app-pesquisador-pesquisar',
  templateUrl: './pesquisador-pesquisar.component.html',
  styleUrls: ['./pesquisador-pesquisar.component.css']
})
export class PesquisadorPesquisarComponent implements OnInit {

  pesquisadorForm: FormGroup;
  colunasTable: string[] = ['idPesquisador', 'nomePesquisador', 'emailPesquisador', 'acoes'];
  pesquisadores: MatTableDataSource<Pesquisador> = new MatTableDataSource();

  constructor(private fb: FormBuilder, private dialog: MatDialog, private alert: AlertComponent) { }

  ngOnInit(): void {
    this.criarForm();
    this.pesquisadores.data.push({ idPesquisador: 1, nomePesquisador: "Vinícius Mendonça", emailPesquisador: "vinicius.jose@souunit.com.br", telefonePesquisador: "79 9 9999-9999", dtNascimentoPesquisador: new Date(), cpf: "111.111.111-11" } as Pesquisador);
    this.pesquisadores.data.push({ idPesquisador: 2, nomePesquisador: "Diego Ribeiro", emailPesquisador: "diego.ribeiro@souunit.com.br", telefonePesquisador: "79 9 9999-9999", dtNascimentoPesquisador: new Date(), cpf: "111.111.111-11" } as Pesquisador);
  }

  criarForm() {
    this.pesquisadorForm = this.fb.group({
      nomePesquisador: [null],
      emailPesquisador: [null]
    })
  }

  atualizarPesquisador(pesquisador: Pesquisador) {
    let dialogRef = this.dialog.open(PesquisadorEditarModalComponent, { data: pesquisador });
    dialogRef.afterClosed().subscribe(resposta => {
      // ATUALIZAR GRID
    })
  }

  excluirPesquisador() {
    this.alert.confirmacao("Você deseja realmente fazer isso?", "Você pode reverter isso!", "Confirmar", "O pesquisador foi excluído.");
  }
}
