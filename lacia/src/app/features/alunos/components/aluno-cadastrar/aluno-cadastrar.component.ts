import { ErrorStateMatcher } from '@angular/material/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AlertComponent } from 'src/app/shared/components/alert/alert.component';



export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted))
  }

}

@Component({
  selector: 'app-aluno-cadastrar',
  templateUrl: './aluno-cadastrar.component.html',
  styleUrls: ['./aluno-cadastrar.component.css']
})
export class AlunoCadastrarComponent implements OnInit {
  alunosForm: FormGroup;
  matcher = new MyErrorStateMatcher();

  constructor(private fb: FormBuilder, private alert: AlertComponent) { }

  ngOnInit(): void {
    this.criarForm();

  }

  criarForm() {
    this.alunosForm = this.fb.group({
      nomeAluno: [null, Validators.required],
      emailAluno: [null, [Validators.required, Validators.email]],
      telefoneAluno: [null, Validators.required],
      dtNascimentoAluno: [null, Validators.required],
      cpf: [null]

    });
  }
  cadastrarAluno() {
    this.alert.show("Cadastrado!", "O aluno foi cadastrado com sucesso!", "success");
  }

  limparDados(){
    this.alunosForm.reset();
  }


}


