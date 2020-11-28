import { ProjetoService } from './../../../../../../services/projeto.service';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AlertComponent } from '@fuse/components/alert/alert.component';
import { AprovarProjeto } from './../../aprovar-projeto';
import { Projeto } from 'app/main/models/projeto.model';

export class MyErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted))
    }
}


@Component({
    selector: 'app-aprovar-projeto-modal',
    templateUrl: './aprovar-projeto-modal.component.html',
    styleUrls: ['./aprovar-projeto-modal.component.css']
})
export class AprovarProjetoModalComponent implements OnInit {

    aprovarProjetoForm: FormGroup;
    matcher = new MyErrorStateMatcher();

    constructor(
        private fb: FormBuilder,
        private dialogRef: MatDialogRef<AprovarProjetoModalComponent>,
        private alert: AlertComponent,
        private projetoService: ProjetoService,
        @Inject(MAT_DIALOG_DATA) projeto: Projeto) {
        this.criarForm(projeto);
    }

    ngOnInit(): void {

    }

    criarForm(projeto: Projeto) {
        this.aprovarProjetoForm = this.fb.group({
            idAprovarProjeto: [projeto.idProjeto, Validators.required],
            nomeAprovarProjeto: [projeto.titulo, [Validators.required]],
            orcamentoAprovarProjeto: [projeto.orcamento, Validators.required],
            dtInicioAprovarProjeto: [projeto.dataInicio, Validators.required],
            dtFimAprovarProjeto: [projeto.dataFim, Validators.required],
            descricaoAprovarProjeto: [projeto.descricao, Validators.required]
        });
    }

    reprovarProjeto() {
        this.alert.confirmacao("Deseja reprovar este projeto?", "", "Confirmar", "O projeto foi reprovado!", "Reprovado")
        .then(() => {
            this.projetoService.reprovarProjeto(this.aprovarProjetoForm.value.idAprovarProjeto)
            .subscribe(() => {
                this.dialogRef.close(true);
            }, erro => this.alert.show('Erro', 'Não foi possível reprovar o projeto', 'error'))
        });
        
    };

    aprovarProjeto() {
        this.projetoService.aprovarProjeto(this.aprovarProjetoForm.value.idAprovarProjeto)
            .subscribe(() => {
                this.alert.show("Aprovado!", "O projeto foi aprovado com sucesso!", "success");
                this.dialogRef.close(true);
            }, erro => this.alert.show('Erro', 'Não foi possível aprovar o projeto', 'error'))
    };
}