import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { PesquisadorSolicitacao } from './../models/pesquisador-solicitacao.model';


const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
};

@Injectable({
    providedIn: 'root'
})
export class UsuarioService {

    constructor(
        private _http: HttpClient) {
        httpOptions.headers.set('Access-Control-Allow-Origin', '*');
    }

    solicitarAcessoPesquisador(pesquisadorSolicitacao: PesquisadorSolicitacao){
        return this._http.post<boolean>(environment.url + '/usuario/solicitacao', JSON.stringify(pesquisadorSolicitacao), httpOptions);
    }

    recuperarSenha(email: string){
      return this._http.put<boolean>(environment.url + '/usuario/senha/recuperar', email, httpOptions);
    }
}

