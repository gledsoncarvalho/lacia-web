import { AlertComponent } from "./../../../../../../@fuse/components/alert/alert.component";
import { UserPassword } from "./../../../../models/user-password.model";
import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";
import { Component, Inject, OnInit } from "@angular/core";
import {
    FormBuilder,
    FormControl,
    FormGroup,
    FormGroupDirective,
    NgForm,
    Validators,
} from "@angular/forms";
import { ErrorStateMatcher } from "@angular/material/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MeuPerfilService } from "app/main/services/meu-perfil.service";

export class MyErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(
        control: FormControl | null,
        form: FormGroupDirective | NgForm | null
    ): boolean {
        const invalidCtrl = !!(
            control &&
            control.invalid &&
            control.parent.dirty
        );
        const invalidParent = !!(
            control &&
            control.parent &&
            control.parent.invalid &&
            control.parent.dirty
        );

        return invalidCtrl || invalidParent;
    }
}

@Component({
    selector: "app-meu-perfil-alterar-senha-modal",
    templateUrl: "./meu-perfil-alterar-senha-modal.component.html",
    styleUrls: ["./meu-perfil-alterar-senha-modal.component.scss"],
})
export class MeuPerfilAlterarSenhaModalComponent implements OnInit {
    formAlterarSenha: FormGroup;
    macther = new MyErrorStateMatcher();
    id: number;

    constructor(
        private formBuilder: FormBuilder,
        private dialogRef: MatDialogRef<MeuPerfilAlterarSenhaModalComponent>,
        private meuPerfilService: MeuPerfilService,
        private alert: AlertComponent,
        @Inject(MAT_DIALOG_DATA) public idUsuario: number
    ) {
        this.id = idUsuario;
    }

    ngOnInit(): void {
        this.criarForm();
    }

    checkPasswords(formGroup: FormGroup) {
        let pass = formGroup.get("novaSenha").value;
        let confirmPass = formGroup.get("confirmarSenha").value;

        return pass === confirmPass ? null : { notSame: true };
    }

    criarForm() {
        this.formAlterarSenha = this.formBuilder.group(
            {
                senhaAtual: [null, Validators.required],
                novaSenha: [null, Validators.required],
                confirmarSenha: [null],
            },
            { validator: this.checkPasswords }
        );
    }

    atualizarSenha() {
        if (this.formAlterarSenha.valid) {
            let userPassword: UserPassword = {
                novaSenha: this.formAlterarSenha.value.novaSenha,
                senhaAtual: this.formAlterarSenha.value.senhaAtual,
            } as UserPassword;
            this.meuPerfilService
                .atualizarSenha(userPassword, this.id)
                .subscribe(
                    (resposta) => {
                        this.alert.show(
                            "Atualização",
                            "Sua senha foi alterada com sucesso!",
                            "success"
                        );
                        this.dialogRef.close();
                    },
                    (error) => {
                        this.alert.show(
                            "Erro",
                            "Não foi possível alterar a senha",
                            "error"
                        );
                    }
                );
        }
    }
}
