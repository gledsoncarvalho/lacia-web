import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-coordenador-cadastrar',
  templateUrl: './coordenador-cadastrar.component.html',
  styleUrls: ['./coordenador-cadastrar.component.css']
})
export class CoordenadorCadastrarComponent implements OnInit {

  coordenadorForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.criarForm();
  }

  criarForm() {
    this.coordenadorForm = this.fb.group({
      dsCoordenador: [null],
      dsEmail: [null]
    })

  }
}
