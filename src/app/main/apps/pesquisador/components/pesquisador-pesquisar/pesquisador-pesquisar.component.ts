import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { AlertComponent } from '@fuse/components/alert/alert.component';
import { Pesquisador } from 'app/main/models/pesquisador.model';
import { PesquisadorService } from './../../../../services/pesquisador.service';

@Component({
    selector: 'app-pesquisador-pesquisar',
    templateUrl: './pesquisador-pesquisar.component.html',
    styleUrls: ['./pesquisador-pesquisar.component.css']
})
export class PesquisadorPesquisarComponent implements OnInit {

    pesquisadorForm: FormGroup;
    colunasTable: string[] = ['nomePesquisador', 'emailPesquisador', 'telefonePesquisador', 'dtNascimentoPesquisador'];
    colunasTableCoordenador: string[] = ['nomePesquisador', 'emailPesquisador', 'telefonePesquisador', 'dtNascimentoPesquisador', 'acoes',];
    pesquisadores: MatTableDataSource<Pesquisador> = new MatTableDataSource();

    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.pesquisadores.filter = filterValue.trim().toLowerCase();
    }


    constructor(private fb: FormBuilder,
        private alert: AlertComponent,
        private pesquisadorService: PesquisadorService) { }

    ngOnInit(): void {
        this.obterPesquisadores();
        this.criarForm();
    }

    obterPesquisadores() {
        this.pesquisadorService.obterPesquisadoresAprovados()
            .subscribe(pesquisadores => {
                this.pesquisadores.data = pesquisadores;
            }, erro => this.alert.show('Erro', 'Não foi possível obter os pesquisadores!', 'error')
            );
    }

    criarForm() {
        this.pesquisadorForm = this.fb.group({
            nomePesquisador: [null],
            emailPesquisador: [null]
        })
    }

    excluirPesquisador(idUsuario: number, index: number) {
        this.alert.confirmacao("Deseja excluir o pesquisador?", "", "Confirmar", "O pesquisador foi excluído.", "Excluído")
            .then(() => {
                this.pesquisadorService.excluirPesquisador(idUsuario)
                    .subscribe(() => {
                        this.pesquisadores.data.splice(index, 1);
                        this.pesquisadores._updateChangeSubscription();
                    })
            });
    }

    getTipoUsuario() {
        return sessionStorage.getItem('tipoUsuario');
    }

}
