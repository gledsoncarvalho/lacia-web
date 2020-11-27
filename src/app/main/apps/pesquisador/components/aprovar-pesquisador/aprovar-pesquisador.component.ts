import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AlertComponent } from '@fuse/components/alert/alert.component';
import { PesquisadorService } from './../../../../services/pesquisador.service';
import { Pesquisador } from './../../pesquisador';


@Component({
    selector: 'app-aprovar-pesquisador',
    templateUrl: './aprovar-pesquisador.component.html',
    styleUrls: ['./aprovar-pesquisador.component.css']
})
export class AprovarPesquisadorComponent implements OnInit {
    displayedColumns: string[] = ['nome', 'email', 'telefone', 'data', 'acao'];
    pesquisadores: MatTableDataSource<Pesquisador> = new MatTableDataSource();

    applyFilter(event: Event): void {
        const filterValue = (event.target as HTMLInputElement).value;
        this.pesquisadores.filter = filterValue.trim().toLowerCase();
    }

    constructor(private alert: AlertComponent,
        private pesquisadorService: PesquisadorService) { }

    ngOnInit(): void {
        this.obterPesquisadores();
    }

    reprovarPesquisador(idUsuario: number, index: number) {
        this.pesquisadorService.reprovarPesquisador(idUsuario)
            .subscribe(() => {
                this.pesquisadores.data.splice(index, 1);
                this.pesquisadores._updateChangeSubscription();
                this.alert.show("Reprovado!", "O pesquisador foi reprovado com sucesso!", "success");
            }, erro => this.alert.show('Erro', 'Não foi possível reprovar o pesquisador', 'error'))
    };

    aprovarPesquisador(idUsuario: number, index: number) {
        this.pesquisadorService.aprovarPesquisador(idUsuario)
            .subscribe(() => {
                this.pesquisadores.data.splice(index, 1);
                this.pesquisadores._updateChangeSubscription();
                this.alert.show("Aprovado!", "O pesquisador foi aprovado com sucesso!", "success");
            }, erro => this.alert.show('Erro', 'Não foi possível aprovar o pesquisador', 'error'))
    };


    obterPesquisadores() {
        this.pesquisadorService.obterPesquisadores()
            .subscribe(pesquisadores => {
                this.pesquisadores.data = pesquisadores;
                this.pesquisadores._updateChangeSubscription();
            }, erro => this.alert.show('Erro', 'Não foi possível obter os pesquisadores', 'error'))
    };
}
