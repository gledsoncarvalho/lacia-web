import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, FormGroup, FormBuilder, Validators} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-pesquisador-cadastrar',
  templateUrl: './pesquisador-cadastrar.component.html',
  styleUrls: ['./pesquisador-cadastrar.component.css']
})
export class PesquisadorCadastrarComponent implements OnInit {

  pesquisadorForm: FormGroup;
  matcher = new MyErrorStateMatcher();

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.criarForm();
  }

  criarForm() {
    this.pesquisadorForm = this.fb.group({
      nome: [null, Validators.required],
      dsEmail: [null, [Validators.required, Validators.email]],
      telefone: [null, Validators.required],
      dtNascimento: [null, Validators.required],
      cpf: [null, Validators.required]
    });
  }
}
