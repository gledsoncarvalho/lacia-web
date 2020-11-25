import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { AlertComponent } from '@fuse/components/alert/alert.component';
import { MeuPerfilEditarModalComponent } from './components/meu-perfil-editar-modal/meu-perfil-editar-modal.component';
import { MeuPerfil } from './meu-perfil';
import { MeuPerfilService } from '../../services/meu-perfil.service';


@Component({
    selector: 'app-meu-perfil',
    templateUrl: './meu-perfil.component.html',
    styleUrls: ['./meu-perfil.component.css']
})
export class MeuPerfilComponent implements OnInit {

    MeuPerfilForm: FormGroup;
    colunasTable: string[] = ['idMeuPerfil', 'nomeMeuPerfil', 'emailMeuPerfil', 'acoes'];
    dados_perfil: MatTableDataSource<MeuPerfil> = new MatTableDataSource();
    perfil: MeuPerfil = { idMeuPerfil: 100, nomeMeuPerfil: 'Fábio Gomes Rocha', emailMeuPerfil: 'fabiogomes@souunit.com.br', telefoneMeuPerfil: '(79)99841-4129', dtNascimentoMeuPerfil: new Date(), cpfMeuPerfil: '172.159.254-99' } as MeuPerfil;


    constructor(
        private fb: FormBuilder, 
        private dialog: MatDialog, 
        private alert: AlertComponent,
        private meuPerfilService: MeuPerfilService) { }

    ngOnInit(): void {
        this.meuPerfilService.obterUsuario()
            .subscribe(perfil => {
                console.log(perfil);
            });
    }

    criarForm() {
        this.MeuPerfilForm = this.fb.group({
            nomeMeuPerfil: [null],
            emailMeuPerfil: [null]
        })
    }

    atualizarMeuPerfil() {
        let dialogRef = this.dialog.open(MeuPerfilEditarModalComponent, { data: this.perfil });
        dialogRef.afterClosed().subscribe(resposta => {
            if (resposta) {
                this.perfil = resposta;
            }
        })
    }
}

