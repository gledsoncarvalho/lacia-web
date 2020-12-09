import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AlertComponent } from './../../../../../../@fuse/components/alert/alert.component';
import { ProjetoService } from './../../../../services/projeto.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Projeto } from 'app/main/models/projeto.model';
import { Status } from '../../../../../../@fuse/enums/status.enum';
import { AddMembroModalComponent } from './components/add-membro-modal/add-membro-modal.component';
import { UsuarioProjeto } from 'app/main/models/usuario-projeto.model';


@Component({
    selector: 'app-meu-projeto',
    templateUrl: './meu-projeto.component.html',
    styleUrls: ['./meu-projeto.component.css']
})

export class MeuProjetoComponent implements OnInit {
    displayedColumns: string[] = ['nomeMeuProjeto', 'orcamentoMeuProjeto', 'dtInicioMeuProjeto', 'dtFimMeuProjeto', 'situacaoMeuProjeto', 'acoes'];
    projetos: MatTableDataSource<Projeto> = new MatTableDataSource();
    status = Status;

    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.projetos.filter = filterValue.trim().toLowerCase();
    }
    constructor(
        public matDialog: MatDialog,
        private projetoService: ProjetoService,
        private alert: AlertComponent) { }


    ngOnInit(): void {
        this.projetos.filterPredicate = (projeto: Projeto, filter: string) => {
            return filter.includes("todos") ? true : projeto.aprovado == JSON.parse(filter);
        }
        this.obterProjetos();
    }

    filtrarProjetos(status: boolean, todos?: boolean) {
        this.projetos.filter = todos ? "todos" : String(status);
        this.projetos._updateChangeSubscription();
    }

    obterProjetos() {
        this.projetoService.obterProjetosPorUsuario(sessionStorage.getItem("email"))
            .subscribe(projetos => {
                this.projetos.data = projetos as any;
            }, error => this.alert.show("Erro!", "Não foi possível obter seus projetos", "error"))
    }

    getSituacao(aprovado: boolean): string {
        switch (aprovado) {
            case true:
                return "Aprovado";
            case false:
                return "Reprovado";
            default:
                return "Em espera";
        }
    }

    openModal(projeto: Projeto, indiceProjeto: number) {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.id = "modal-component";
        dialogConfig.data = projeto.usuarios;
        let modalDialog = this.matDialog.open(AddMembroModalComponent, dialogConfig);
        modalDialog.afterClosed().subscribe(resposta => {
            if (resposta) {
                projeto.usuarios = resposta;
                this.projetoService.cadastrarMembrosProjeto(projeto)
                    .subscribe(() => {
                        this.alert.show(
                            "Adicionados!",
                            "Membros adicionados com sucesso!",
                            "success"
                        );
                        this.projetos[indiceProjeto] = projeto;
                    }, error => this.alert.show("Erro!", "Não foi possível atualizar membros!", "error")
                    );
            }
        });
    }
}
