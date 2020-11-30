import { UsuarioService } from './../../../services/usuario.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { FuseConfigService } from '@fuse/services/config.service';
import { fuseAnimations } from '@fuse/animations';
import { AlertComponent } from '@fuse/components/alert/alert.component';


@Component({
    selector     : 'forgot-password',
    templateUrl  : './forgot-password.component.html',
    styleUrls    : ['./forgot-password.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class ForgotPasswordComponent implements OnInit
{
    forgotPasswordForm: FormGroup;

    constructor(
        private _fuseConfigService: FuseConfigService,
        private _formBuilder: FormBuilder,
        private alert: AlertComponent,
        private usuarioService: UsuarioService
    )
    {
        this._fuseConfigService.config = {
            layout: {
                navbar   : {
                    hidden: true
                },
                toolbar  : {
                    hidden: true
                },
                footer   : {
                    hidden: true
                },
                sidepanel: {
                    hidden: true
                }
            }
        };
    }

    ngOnInit(): void
    {
        this.forgotPasswordForm = this._formBuilder.group({
            email: ['', [Validators.required, Validators.email]]
        });
    }
    
    confirmarSenha() {
        if (this.forgotPasswordForm.valid) {
            this.usuarioService.recuperarSenha(this.forgotPasswordForm.value.email)
                .subscribe(() => {
                    this.alert.show("Enviado!", "Uma nova senha foi enviada para o seu email registrado!", "success");
                }, error => this.alert.show("Erro", "Email incorreto.", "error") )
        } else {
            this.alert.show("Aviso", "Favor preencher os campos obrigatórios", "warning");
        }
    }

}
