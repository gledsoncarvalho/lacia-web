import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-coordenador-cadastrar',
  templateUrl: './coordenador-cadastrar.component.html',
  styleUrls: ['./coordenador-cadastrar.component.css']
})
export class CoordenadorCadastrarComponent implements OnInit {

  coordenadorForm: FormGroup;
  matcher = new MyErrorStateMatcher();

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.criarForm();
  }

  criarForm() {
    this.coordenadorForm = this.fb.group({
      dsCoordenador: [null, Validators.required],
      dsEmail: [null, [Validators.required, Validators.email]]
    })

  }
}
