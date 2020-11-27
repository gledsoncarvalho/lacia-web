import { Aluno } from './../models/aluno.model';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { AlertComponent } from './../../../@fuse/components/alert/alert.component';
import { invalid } from '@angular/compiler/src/render3/view/util';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + sessionStorage.getItem('token') 
    }),
    params: new HttpParams()
};

@Injectable({
    providedIn: 'root'
})
export class AlunoService {

    constructor(private _http: HttpClient, private alert: AlertComponent) {
        httpOptions.headers.set('Access-Control-Allow-Origin', 'http://localhost:4200');
        httpOptions.headers.set('Access-Control-Allow-Methods', 'POST, GET, DELETE, PUT');
        httpOptions.headers.set('Access-Control-Allow-Headers', '*');
    }

    obterAlunos(){
      return this._http.get<Aluno[]>(environment.url + '/alunos', httpOptions);
    }

    excluirAluno(idUsuario: number){
      return this._http.delete<boolean>(environment.url + `/aluno/excluir/${idUsuario}`, httpOptions)
    }

    cadastrarAluno(aluno: Aluno){
      return this._http.post<boolean>(environment.url + '/aluno/cadastrar', JSON.stringify(aluno), httpOptions);
    }

}

