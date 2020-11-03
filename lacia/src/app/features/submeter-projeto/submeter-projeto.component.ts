import { Component, OnInit } from '@angular/core';
import { SubmeterProjeto } from './submeter-projeto';
import { ErrorStateMatcher } from '@angular/material/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { HttpClient} from '@angular/common/http'
import { Subscriber } from 'rxjs';


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
  constructor(private fb: FormBuilder, private http: HttpClient) {}

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
  /*onChange(event){
    console.log(event);

  const selectFiles = <FileList>event.srcElement.files;
  //document.getElementById('customFileLabel').innerHTML = selectFiles[0].name;

  const fileNames = [];
  for(let i=0; i<selectFiles.length;i++){
    fileNames.push(selectFiles[i].name);
  }
  document.getElementById('customFileLabel').innerHTML = fileNames.join(', ' );

  }*/
 

  inputFileChange(event){
    if(event.target.files && event.target.files[0]){
      const foto = event.target.files[0];

      const formData = new FormData();
      formData.append('foto',foto);

      this.http.post('', formData).
      subscribe(resposta => console.log('upload ok'));
    }

  }


}
