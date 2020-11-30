import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { AlertComponent } from './../../../@fuse/components/alert/alert.component';
import { Pesquisador } from './../models/pesquisador.model';

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
export class PesquisadorService {

    constructor(private _http: HttpClient, private alert: AlertComponent) {
        httpOptions.headers.set('Access-Control-Allow-Origin', 'http://localhost:4200');
        httpOptions.headers.set('Access-Control-Allow-Methods', 'POST, GET, DELETE, PUT');
        httpOptions.headers.set('Access-Control-Allow-Headers', '*');
    }

    obterPesquisadoresAprovados() {
        return this._http.get<Pesquisador[]>(environment.url + '/pesquisadores', httpOptions);
    }

    obterPesquisadores() {
        return this._http.get<Pesquisador[]>(environment.url + '/pesquisador/todos', httpOptions);
    }

    excluirPesquisador(idUsuario: number) {
        return this._http.delete<boolean>(environment.url + `/pesquisador/excluir/${idUsuario}`, httpOptions)
    }

    aprovarPesquisador(idUsuario: number) {
        return this._http.put<boolean>(environment.url + `/pesquisador/aprovar/${idUsuario}`, null, httpOptions)
    }

    reprovarPesquisador(idUsuario: number) {
        return this._http.put<boolean>(environment.url + `/pesquisador/reprovar/${idUsuario}`, null, httpOptions)
    }
}
