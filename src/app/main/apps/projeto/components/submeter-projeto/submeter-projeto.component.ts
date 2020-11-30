import { Component, OnInit } from "@angular/core";
import {
    FormBuilder,
    FormControl,
    FormGroup,
    FormGroupDirective,
    NgForm,
    Validators
} from "@angular/forms";
import { ErrorStateMatcher } from "@angular/material/core";
import { AlertComponent } from "@fuse/components/alert/alert.component";
import { ProjetoService } from "./../../../../services/projeto.service";

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
            control.parent.getError('menor') &&
            control.parent.dirty
        );

        return invalidCtrl || invalidParent;
    }
}
@Component({
    selector: "app-submeter-projeto",
    templateUrl: "./submeter-projeto.component.html",
    styleUrls: ["./submeter-projeto.component.css"],
})
export class SubmeterProjetoComponent implements OnInit {
    submeterProjetoForm: FormGroup;
    matcher = new MyErrorStateMatcher();
    constructor(
        private fb: FormBuilder,
        private alert: AlertComponent,
        private projetoService: ProjetoService
    ) { 
        this.criarForm();
    }

    ngOnInit(): void {
        
    }

    criarForm() {
        this.submeterProjetoForm = this.fb.group({
            idProjeto: [null],
            titulo: [null, Validators.required],
            descricao: [null, [Validators.required]],
            dataInicio: [null, Validators.required],
            dataFim: [null, [Validators.required]],
            orcamento: [null, Validators.required],
            emailUsuario: [sessionStorage.getItem('email')],
            isAprovado: [null],
        }, { validator: this.checkDatas});
    }

    checkDatas(formGroup: FormGroup) {
        let dataInicio = formGroup.get('dataInicio').value;
        let dataFim = formGroup.get('dataFim').value;
        return new Date(dataInicio) <= new Date(dataFim) ? null : { menor: true };
    }

    submeterProjeto() {
        if (this.submeterProjetoForm.valid) {
            this.projetoService
                .cadastrarProjeto(this.submeterProjetoForm.value)
                .subscribe(
                    () => {
                        this.alert.show(
                            "Submetido!",
                            "O projeto foi submetido com sucesso!",
                            "success"
                        );
                        this.submeterProjetoForm.reset();
                    },
                    (error) =>
                        this.alert.show(
                            "Erro!",
                            "Não foi possível submeter o projeto!",
                            "error"
                        )
                );
        } else {
            this.alert.show(
                "Aviso",
                "Favor preencher os campos obrigatórios",
                "warning"
            );
        }
    }

    limparDados() {
        this.submeterProjetoForm.reset();
    }
}
