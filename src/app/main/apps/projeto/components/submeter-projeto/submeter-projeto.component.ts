import { ProjetoService } from "./../../../../services/projeto.service";
import { Component, OnInit } from "@angular/core";
import { ErrorStateMatcher } from "@angular/material/core";
import {
    FormBuilder,
    FormControl,
    FormGroup,
    FormGroupDirective,
    NgForm,
    Validators,
} from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { AlertComponent } from "@fuse/components/alert/alert.component";

export class MyErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(
        control: FormControl | null,
        form: FormGroupDirective | NgForm | null
    ): boolean {
        const isSubmitted = form && form.submitted;
        return !!(
            control &&
            control.invalid &&
            (control.dirty || control.touched || isSubmitted)
        );
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
        private http: HttpClient,
        private alert: AlertComponent,
        private projetoService: ProjetoService
    ) {}

    ngOnInit(): void {
        this.criarForm();
    }

    criarForm() {
        this.submeterProjetoForm = this.fb.group({
            idProjeto: [null],
            titulo: [null, Validators.required],
            descricao: [null, [Validators.required]],
            dataInicio: [null, Validators.required],
            dataFim: [null, Validators.required],
            orcamento: [null, Validators.required],
            emailUsuario: [sessionStorage.getItem("email")],
            isAprovado: [null],
        });
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
