import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AlertComponent } from '@fuse/components/alert/alert.component';
import { AprovarProjeto } from './../../aprovar-projeto';

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
        @Inject(MAT_DIALOG_DATA) projeto: AprovarProjeto) {
        this.criarForm(projeto);
        console.log(projeto);
    }

    ngOnInit(): void {
    }

    criarForm(projeto: AprovarProjeto) {
        this.aprovarProjetoForm = this.fb.group({
            idAprovarProjeto: [projeto.idAprovarProjeto, Validators.required],
            nomeAprovarProjeto: [projeto.nomeAprovarProjeto, [Validators.required]],
            orcamentoAprovarProjeto: [projeto.orcamentoAprovarProjeto, Validators.required],
            dtInicioAprovarProjeto: [projeto.dtInicioAprovarProjeto, Validators.required],
            dtFimAprovarProjeto: [projeto.dtFimAprovarProjeto, Validators.required],
            descricaoAprovarProjeto: [projeto.descricaoAprovarProjeto, Validators.required]
        });
    }

    aprovarProjeto() {
        this.alert.show("Aprovado!", "O projeto foi aprovado com sucesso!", "success");
        this.dialogRef.close();
    }

    reprovarProjeto() {
        this.alert.confirmacao("Deseja reprovar este projeto?", "", "Confirmar", "O projeto foi reprovado!", "Reprovado");
        this.dialogRef.close();
    }
}