import { Coordenador } from './../../coordenador';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { CoordenadorEditarModalComponent } from './../coordenador-editar-modal/coordenador-editar-modal.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-coordenador-pesquisar',
  templateUrl: './coordenador-pesquisar.component.html',
  styleUrls: ['./coordenador-pesquisar.component.css']
})
export class CoordenadorPesquisarComponent implements OnInit {

  coordenadorForm: FormGroup;
  colunasTable: string[] = ['idCoordenador', 'dsCoordenador', 'dsEmail', 'acoes'];
  coordenadores: MatTableDataSource<Coordenador> = new MatTableDataSource();

  constructor(private fb: FormBuilder, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.criarForm();
    this.coordenadores.data.push({ idCoordenador: 1, nomeCoordenador: "Fábio Gomes", emailCoordenador: "fabio.gomes@souunit.com.br", telefoneCoordenador: "79 9 9999-9999", dtNascimentoCoordenador: new Date(), cpf: "111.111.111-11" } as Coordenador);
    this.coordenadores.data.push({ idCoordenador: 2, nomeCoordenador: "Roberto Carlos", emailCoordenador: "roberto.carlos@souunit.com.br", telefoneCoordenador: "79 9 9999-9999", dtNascimentoCoordenador: new Date(), cpf: "111.111.111-11" } as Coordenador);
  }

  criarForm() {
    this.coordenadorForm = this.fb.group({
      dsCoordenador: [null],
      dsEmail: [null]
    })
  }

  atualizarCoordenador(coordenador: Coordenador) {
    let dialogRef = this.dialog.open(CoordenadorEditarModalComponent, { data: coordenador });
    dialogRef.afterClosed().subscribe(resposta => {
      // ATUALIZAR GRID
    })
  }

  excluirCoordenador() {
    Swal.fire({
      title: 'Você deseja realmente fazer isso?',
      text: "Você pode reverter isso!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deletado!',
          'O coordenador foi excluído.',
          'success'
        );
      }
    })
  }
}
