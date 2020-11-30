import { Router } from '@angular/router';
import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { fuseAnimations } from '@fuse/animations';
import { FuseConfigService } from '@fuse/services/config.service';
import { Subject } from 'rxjs';
import { AlertComponent } from './../../../../../@fuse/components/alert/alert.component';
import { UsuarioService } from './../../../services/usuario.service';


@Component({
    selector     : 'register',
    templateUrl  : './register.component.html',
    styleUrls    : ['./register.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class RegisterComponent implements OnInit, OnDestroy
{
    registerForm: FormGroup;

    private _unsubscribeAll: Subject<any>;

    constructor(
        private _fuseConfigService: FuseConfigService,
        private _formBuilder: FormBuilder,
        private usuarioService: UsuarioService,
        private alert: AlertComponent,
        private router: Router
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

        this._unsubscribeAll = new Subject();
    }

    ngOnInit(): void
    {
        this.criarForm();
    }

    ngOnDestroy(): void
    {
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    solicitarAcessoPesquisador(){
        if (this.registerForm.valid){
            this.usuarioService.solicitarAcessoPesquisador(this.registerForm.value)
            .subscribe(() => {
                this.alert.show("Solicitação", "A solicitação de acesso a pesquisador foi feita com sucesso!", "success");
                this.router.navigate(["/pages/auth/login"]);
            }, error => this.alert.show("Erro", "Não foi possível efetuar a solicitação de acesso a pesquisador.", "error")
            )
        } else {
            this.alert.show("Atenção", "Por favor preencha os campos obrigatórios!", "warning")
        }
    }

    criarForm(){
        this.registerForm = this._formBuilder.group({
            idUsuario      : [null],
            nome           : [null, Validators.required],
            email          : [null, [Validators.required, Validators.email]],
            dataNascimento : [null],
            cpf            : [null],
            telefone       : [null, Validators.required],
            tipoUsuario    : [null],
            isAprovado     : [null]
        });
    }
}
