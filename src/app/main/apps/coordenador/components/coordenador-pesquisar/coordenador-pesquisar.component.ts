import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { AlertComponent } from '@fuse/components/alert/alert.component';
import { Coordenador } from '../../../../models/coordenador.model';
import { CoordenadorService } from './../../../../services/coordenador.service';

@Component({
    selector: 'app-coordenador-pesquisar',
    templateUrl: './coordenador-pesquisar.component.html',
    styleUrls: ['./coordenador-pesquisar.component.css']
})
export class CoordenadorPesquisarComponent implements OnInit {

    coordenadorForm: FormGroup;
    colunasTable: string[] = ['dsCoordenador', 'dsEmail', 'dsTelefone', 'dtNascimento'];
    coordenadores: MatTableDataSource<Coordenador> = new MatTableDataSource();

    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.coordenadores.filter = filterValue.trim().toLowerCase();
    }

    constructor(private fb: FormBuilder, private dialog: MatDialog, private alert: AlertComponent, private coordenadorService: CoordenadorService) { }

    ngOnInit(): void {
        this.criarForm();
        this.obterCoordenadores();
    }

    obterCoordenadores() {
        this.coordenadorService.obterCoordenadores()
            .subscribe(coordenadores => {
                this.coordenadores.data = coordenadores as any;
            }, erro => this.alert.show('Erro', 'Não foi possível obter os coordenadores!', 'error')
            );
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
        this.alert.confirmacao("Deseja realmente excluir o coordenador?", "", "Confirmar", "O coordenador foi excluído.", "Excluído");
    }
}
