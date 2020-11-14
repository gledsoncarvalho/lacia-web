import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Status } from '@fuse/enums/status.enum';
import { AprovarProjeto } from './aprovar-projeto';
import { AprovarProjetoModalComponent } from './components/aprovar-projeto-modal/aprovar-projeto-modal.component';

const ELEMENT_DATA: AprovarProjeto[] = [
    { idAprovarProjeto: 3, nomeAprovarProjeto: "Lacia", orcamentoAprovarProjeto: 500.50, dtInicioAprovarProjeto: new Date(), dtFimAprovarProjeto: new Date(), descricaoAprovarProjeto: "Descrição parte 1" },
    { idAprovarProjeto: 4, nomeAprovarProjeto: "Composto V", orcamentoAprovarProjeto: 50000.33, dtInicioAprovarProjeto: new Date(), dtFimAprovarProjeto: new Date(), descricaoAprovarProjeto: "Descrição parte 2" },
    { idAprovarProjeto: 5, nomeAprovarProjeto: "Projeto Chico", orcamentoAprovarProjeto: 2000.90, dtInicioAprovarProjeto: new Date(), dtFimAprovarProjeto: new Date(), descricaoAprovarProjeto: "Descrição parte 3" },
];

@Component({
    selector: 'app-aprovar-projeto',
    templateUrl: './aprovar-projeto.component.html',
    styleUrls: ['./aprovar-projeto.component.css']
})
export class AprovarProjetoComponent implements OnInit {
    displayedColumns: string[] = ['idAprovarProjeto', 'nomeAprovarProjeto', 'orcamentoAprovarProjeto', 'dtInicioAprovarProjeto', 'dtFimAprovarProjeto', 'acoes'];
    dataSource = new MatTableDataSource(ELEMENT_DATA);
    status = Status;

    constructor(private router: Router, private dialog: MatDialog) { }

    ngOnInit(): void { }

    analisarProjeto(projeto: AprovarProjeto) {
        let dialogRef = this.dialog.open(AprovarProjetoModalComponent, { data: projeto });
        dialogRef.afterClosed().subscribe(resposta => { })
    }

    recarregarTela() {
        location.reload();
    }

}
