import { AlunoService } from './../../../../services/aluno.service';
import { ErrorStateMatcher } from '@angular/material/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AlertComponent } from '@fuse/components/alert/alert.component';


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

  constructor(
    private fb: FormBuilder,
    private alert: AlertComponent,
    private alunoService: AlunoService) { }

  ngOnInit(): void {
    this.criarForm();

  }

  criarForm() {
    this.alunosForm = this.fb.group({
      idUsuario: [null],
      nome: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      telefone: [null, Validators.required],
      dataNascimento: [null, Validators.required],
      cpf: [null]

    });
  }
  
  cadastrarAluno() {
    if (this.alunosForm.valid) {
      this.alunoService.cadastrarAluno(this.alunosForm.value)
        .subscribe(() => {
          this.alert.show("Cadastrado!", "O aluno foi cadastrado com sucesso!", "success");
          this.limparDados();
        }, erro => this.alert.show("Erro", "Não foi possível cadastrar!", "error"));
    } else {
      this.alert.show("Aviso", "Favor preencher os campos obrigatórios", "warning");
    }
  }

  limparDados() {
    this.alunosForm.reset();
  }


}


