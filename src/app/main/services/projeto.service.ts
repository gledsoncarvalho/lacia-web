import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { AlertComponent } from './../../../@fuse/components/alert/alert.component';
import { Projeto } from './../models/projeto.model';

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
export class ProjetoService {

    constructor(private _http: HttpClient, private alert: AlertComponent) {
        httpOptions.headers.set('Access-Control-Allow-Origin', 'http://localhost:4200');
        httpOptions.headers.set('Access-Control-Allow-Methods', 'POST, GET, DELETE, PUT');
        httpOptions.headers.set('Access-Control-Allow-Headers', '*');
    }

    cadastrarProjeto(projeto: Projeto){
      return this._http.post<boolean>(environment.url + '/projeto/cadastrar', JSON.stringify(projeto), httpOptions);
    }

    obterProjetosPorUsuario(email: string){
        return this._http.get<Projeto[]>(environment.url + `/projeto/meus/${email}`, httpOptions);
    }

    obterProjetos(email: string){
        return this._http.get<Projeto[]>(environment.url + `/projeto/todos/${email}`, httpOptions);
    }
  
    aprovarProjeto(idProjeto: number){
        return this._http.put<boolean>(environment.url + `/projeto/aprovar/${idProjeto}`, null, httpOptions)
    }
  
    reprovarProjeto(idProjeto: number){
        return this._http.put<boolean>(environment.url + `/projeto/reprovar/${idProjeto}`, null, httpOptions)
    }

    obterTodosProjetosCadastrados(){
        return this._http.get<Projeto[]>(environment.url + '/projeto/todos', httpOptions);
    }

}

