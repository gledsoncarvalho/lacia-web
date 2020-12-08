import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { UsuarioProjeto } from 'app/main/models/usuario-projeto.model';
import { ProjetoService } from 'app/main/services/projeto.service';
import { UsuarioService } from '../../../../../../services/usuario.service';
import { AlertComponent } from './../../../../../../../../@fuse/components/alert/alert.component';

@Component({
    selector: 'app-add-membro-modal',
    templateUrl: './add-membro-modal.component.html',
    styleUrls: ['./add-membro-modal.component.scss']
})
export class AddMembroModalComponent implements OnInit {

    usuarios: UsuarioProjeto[] = [];
    todosUsuarios: UsuarioProjeto[] = [];

    constructor(
        private dialogRef: MatDialogRef<AddMembroModalComponent>,
        private alert: AlertComponent,
        private projetoService: ProjetoService,
        private usuarioService: UsuarioService,
        private _sanitizer: DomSanitizer,
        @Inject(MAT_DIALOG_DATA) usuarios: UsuarioProjeto[]) {
        this.usuarios = usuarios;
    }

    ngOnInit(): void {
        this.obterTodosUsuariosAprovados();
    }

    addMembros() {
        this.alert.show("Adicionado(s)", "Os alunos fora adicionados com sucesso!", "success");
    }

    retornarImagem(src: string) {
        return src && src.startsWith('data:image') ? this._sanitizer.bypassSecurityTrustResourceUrl(src) : '../../../../../../../../../assets/images/avatars/profile.jpg';
    }

    obterTodosUsuariosAprovados() {
        this.usuarioService.obterTodosUsuariosAprovados()
            .subscribe(usuarios => {
                usuarios.forEach(usuario => {
                    usuario.fotoPerfil = usuario.fotoPerfil ? atob(usuario.fotoPerfil) : null;
                });
                this.todosUsuarios = usuarios;
            });
    }

    checked(membro: UsuarioProjeto) {
        for (let i = 0; i < this.usuarios.length; i++) {
            if (this.usuarios[i].idUsuario === membro.idUsuario){
                return true;
            }
        }
        return false;
    }


    adicionarMembro(membro: UsuarioProjeto) {
        let novoMembro: UsuarioProjeto = Object.assign({}, membro);
        novoMembro.fotoPerfil = btoa(novoMembro.fotoPerfil);
        this.usuarios.push(novoMembro);
    }

    cadastrarMembros() {
        this.dialogRef.close(this.usuarios);
    }

}
