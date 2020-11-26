import { Component, Inject, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { AlertComponent } from "@fuse/components/alert/alert.component";
import { MeuPerfilService } from "./../../../../services/meu-perfil.service";
import { MeuPerfil } from "./../../meu-perfil";

@Component({
    selector: "app-meu-perfil-editar-modal",
    templateUrl: "./meu-perfil-editar-modal.component.html",
    styleUrls: ["./meu-perfil-editar-modal.component.css"],
})
export class MeuPerfilEditarModalComponent implements OnInit {
    MeuPerfilForm: FormGroup;
    perfil: MeuPerfil = {} as MeuPerfil;

    constructor(
        private fb: FormBuilder,
        private dialogRef: MatDialogRef<MeuPerfilEditarModalComponent>,
        private alert: AlertComponent,
        @Inject(MAT_DIALOG_DATA) meuPerfil: MeuPerfil,
        private meuPerfilService: MeuPerfilService
    ) {
        this.perfil = meuPerfil;
        this.criarForm(meuPerfil);
    }

    ngOnInit(): void {}
    criarForm(meuPerfil: MeuPerfil) {
        this.MeuPerfilForm = this.fb.group({
            idUsuario: [meuPerfil.idUsuario],
            nome: [meuPerfil.nome, Validators.required],
            email: [meuPerfil.email, [Validators.required, Validators.email]],
            telefone: [meuPerfil.telefone, Validators.required],
            dataNascimento: [meuPerfil.dataNascimento, Validators.required],
            cpf: [meuPerfil.cpf],
        });
    }
    atualizarMeuPerfil() {
        if (this.MeuPerfilForm.valid) {
                this.meuPerfilService
                .atualizarUsuario(this.MeuPerfilForm.value)
                .subscribe(
                    (usuario) => {
                        sessionStorage.setItem('token', usuario.token);
                        sessionStorage.setItem('email', usuario.email);
                        sessionStorage.setItem('nome', usuario.nome);
                        this.perfil = usuario;
                        this.dialogRef.close(this.perfil);
                        this.alert.show(
                            "Atualizado!",
                            "O dados foram atualizados com sucesso!",
                            "success"
                        );
                    },
                    (error) => this.alert.show("Erro", "Dado(s) email, CPF e/ou telefone já em uso!", "error")
                );
        } else {
            this.alert.show(
                "Aviso",
                "Favor preencher os campos obrigatórios",
                "warning"
            );
        }
    }
}
