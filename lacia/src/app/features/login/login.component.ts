import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() autenticado: EventEmitter<any> = new EventEmitter();
  matcher = new MyErrorStateMatcher();
  login: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.criarForm();
  }

  criarForm() {
    this.login = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      senha: [null, Validators.required]
    });
  }

  logar() {
    if (this.login.valid) {
      this.router.navigateByUrl("/coordenador");
      this.autenticado.emit();
    } else {
      Swal.fire(
        'Aviso',
        'Favor preencher os campos obrigatórios',
        'warning'
      )
    }
  }

}
