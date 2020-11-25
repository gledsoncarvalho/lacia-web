import { MeuPerfilAlterarSenhaModalComponent } from './components/meu-perfil-alterar-senha-modal/meu-perfil-alterar-senha-modal.component';
import { DomSanitizer } from '@angular/platform-browser';
import { TipoUsuario } from './../../../../@fuse/enums/tipoUsuario.enum';
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
    colunasTable: string[] = ['idMeuPerfil', 'nome', 'email', 'acoes'];
    dados_perfil: MatTableDataSource<MeuPerfil> = new MatTableDataSource();
    perfil: MeuPerfil = {} as MeuPerfil;
    menuIsOpen: boolean = false;

    constructor(
        private fb: FormBuilder, 
        private dialog: MatDialog, 
        private alert: AlertComponent,
        private meuPerfilService: MeuPerfilService,
        private _sanitizer: DomSanitizer) { }

    ngOnInit(): void {
        this.meuPerfilService.obterUsuario()
            .subscribe(perfil => {
                console.log(perfil);
                this.perfil = perfil;
            });
    }

    criarForm() {
        this.MeuPerfilForm = this.fb.group({
            nome: [null],
            email: [null]
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

    alterarSenha() {
        this.dialog.open(MeuPerfilAlterarSenhaModalComponent, { data: this.perfil.idUsuario, width: "15%" });
    }

    getFuncao(tipoUsuario: string){
        switch(tipoUsuario){
            case 'C':
                return "Coordenador";
            case 'P':
                return "Pesquisador";
            default:
                return "Aluno";
        }
    }

    changeListener($event): void {
        this.readThis($event.target);
    }

    readThis(inputValue: any): void {
            let file: File = inputValue.files[0];
            let myReader: FileReader = new FileReader();

            myReader.onloadend = (e) => {
                this.meuPerfilService.atualizarImagem(myReader.result.toString(), this.perfil.idUsuario);
            }

            myReader.readAsDataURL(file);
        }

        retornarImagem() {
            let src: string = sessionStorage.getItem("fotoPerfil");
            return src && src.startsWith('data:image') ? this._sanitizer.bypassSecurityTrustResourceUrl(src) : '../../../../../../../../../assets/images/scrumboard/documents.jpg';
        }

        menuOpened() {
            this.menuIsOpen = true;
          }
        
          menuClosed() {
            this.menuIsOpen = false;
          }
    
    }


