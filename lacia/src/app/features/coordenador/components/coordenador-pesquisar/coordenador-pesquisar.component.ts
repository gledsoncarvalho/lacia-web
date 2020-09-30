import { Coordenador } from './../../coordenador';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-coordenador-pesquisar',
  templateUrl: './coordenador-pesquisar.component.html',
  styleUrls: ['./coordenador-pesquisar.component.css']
})
export class CoordenadorPesquisarComponent implements OnInit {

  coordenadorForm: FormGroup;
  colunasTable: string[] = ['idCoordenador', 'dsCoordenador', 'dsEmail'];
  coordenadores: MatTableDataSource<Coordenador> = new MatTableDataSource();

  constructor(private fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.criarForm();
    this.coordenadores.data.push({ idCoordenador: 1, dsCoordenador: "Fábio Gomes", dsEmail: "fabio.gomes@souunit.com.br" } as Coordenador);
  }

  criarForm() {
    this.coordenadorForm = this.fb.group({
      dsCoordenador: [null],
      dsEmail: [null]
    })
  }

}
