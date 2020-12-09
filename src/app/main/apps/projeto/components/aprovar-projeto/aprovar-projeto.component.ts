import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Status } from '@fuse/enums/status.enum';
import { Projeto } from 'app/main/models/projeto.model';
import { AlertComponent } from './../../../../../../@fuse/components/alert/alert.component';
import { ProjetoService } from './../../../../services/projeto.service';
import { AprovarProjetoModalComponent } from './components/aprovar-projeto-modal/aprovar-projeto-modal.component';

@Component({
    selector: 'app-aprovar-projeto',
    templateUrl: './aprovar-projeto.component.html',
    styleUrls: ['./aprovar-projeto.component.css']
})
export class AprovarProjetoComponent implements OnInit {
    displayedColumns: string[] = ['nomeAprovarProjeto', 'orcamentoAprovarProjeto', 'dtInicioAprovarProjeto', 'dtFimAprovarProjeto', 'acoes'];
    projetos: MatTableDataSource<any> = new MatTableDataSource();
    status = Status;

    constructor(
        private dialog: MatDialog,
        private projetoService: ProjetoService,
        private alert: AlertComponent) { }

    ngOnInit(): void {
        this.obterProjetos();
    }

    analisarProjeto(projeto: Projeto, indice: number) {
        let dialogRef = this.dialog.open(AprovarProjetoModalComponent, { data: projeto });
        dialogRef.afterClosed().subscribe(resposta => {
            if (resposta) {
                this.projetos.data.splice(indice, 1);
                this.projetos._updateChangeSubscription();
            }
        });
    }

    recarregarTela() {
        location.reload();
    }

    obterProjetos() {
        this.projetoService.obterProjetos(sessionStorage.getItem("email"))
            .subscribe(projetos => {
                this.projetos.data = projetos as any;
            }, error => this.alert.show("Erro!", "Não foi possível obter os projetos", "error"))
    }

}
