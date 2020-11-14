import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { AlertComponent } from '@fuse/components/alert/alert.component';
import { Coordenador } from './../../coordenador';

@Component({
    selector: 'app-coordenador-pesquisar',
    templateUrl: './coordenador-pesquisar.component.html',
    styleUrls: ['./coordenador-pesquisar.component.css']
})
export class CoordenadorPesquisarComponent implements OnInit {

    coordenadorForm: FormGroup;
    colunasTable: string[] = ['dsCoordenador', 'dsEmail', 'dsTelefone', 'dtNascimento', 'acoes'];
    coordenadores: MatTableDataSource<Coordenador> = new MatTableDataSource();

    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.coordenadores.filter = filterValue.trim().toLowerCase();
    }

    constructor(private fb: FormBuilder, private dialog: MatDialog, private alert: AlertComponent) { }

    ngOnInit(): void {
        this.criarForm();
        this.coordenadores.data.push({ idCoordenador: 1, nomeCoordenador: "Fábio Gomes", emailCoordenador: "fabio.gomes@souunit.com.br", telefoneCoordenador: "79 9 9999-8888", dtNascimentoCoordenador: new Date(), cpf: "111.111.111-11" } as Coordenador);
        this.coordenadores.data.push({ idCoordenador: 2, nomeCoordenador: "Roberto Carlos", emailCoordenador: "roberto.carlos@souunit.com.br", telefoneCoordenador: "79 9 9999-9999", dtNascimentoCoordenador: new Date(), cpf: "111.111.111-11" } as Coordenador);
    }

    criarForm() {
        this.coordenadorForm = this.fb.group({
            dsCoordenador: [null],
            dsEmail: [null],
            dsTelefone: [null],
            dtNascimento: [null]
        })
    }

    excluirCoordenador() {
        this.alert.confirmacao("Você deseja realmente fazer isso?", "Você pode reverter isso!", "Confirmar", "O coordenador foi excluído.");
    }
}
