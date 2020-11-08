import { MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { SubmeterProjeto } from './submeter-projeto';
import { ErrorStateMatcher } from '@angular/material/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { HttpClient} from '@angular/common/http'
import { Subscriber } from 'rxjs';
import { AlertComponent } from 'src/app/shared/components/alert/alert.component';


export class MyErrorStateMatcher implements ErrorStateMatcher{
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null):boolean{
    const isSubmitted = form && form.submitted;
    return !! (control && control.invalid && (control.dirty || control.touched || isSubmitted))
  }

}
@Component({
  selector: 'app-submeter-projeto',
  templateUrl: './submeter-projeto.component.html',
  styleUrls: ['./submeter-projeto.component.css']
})
export class SubmeterProjetoComponent implements OnInit {

 
  submeterProjetoForm: FormGroup;
  matcher = new MyErrorStateMatcher();
  constructor(private fb: FormBuilder, private http: HttpClient, private alert: AlertComponent) {}

  ngOnInit(): void {
    this.criarForm();
  }
  criarForm(){
    this.submeterProjetoForm = this.fb.group({
      nomeSubmeterProjeto: [null, Validators.required],
      descricaoSubmeterProjeto: [null,[Validators.required]],
      dt_inicio_SubmeterProjeto: [null, Validators.required],
      dt_fim_SubmeterProjeto: [null, Validators.required],
      sloganSubmeterProjeto: [null],
      orcamentoSubmeterProjeto: [null,Validators.required]

    });
  }
  submeterProjeto() {
    this.alert.show("Submetido!", "O projeto foi submetido com sucesso!", "success");
  }

  limparDados(){
    this.submeterProjetoForm.reset();
  }

}
