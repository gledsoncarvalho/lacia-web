import { PesquisadorSolicitacao } from './../models/pesquisador-solicitacao.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserLogin } from '../models/User.model';
import { environment } from '../../../environments/environment';
import { UserResponse } from '../models/user-response.model';
import { AlertComponent } from '../../../@fuse/components/alert/alert.component';
import { Router } from '@angular/router';


const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
};

@Injectable({
    providedIn: 'root'
})
export class JwtService {

    constructor(
        private _http: HttpClient, 
        private _alert: AlertComponent,
        private _router: Router) {
        httpOptions.headers.set('Access-Control-Allow-Origin', '*');
    }

    login(usuario: UserLogin) {
        this._http.post<UserResponse>(environment.url + '/login', JSON.stringify(usuario), httpOptions)
            .subscribe(response => {
                sessionStorage.setItem('token', response.token);
                sessionStorage.setItem('email', response.email);
                sessionStorage.setItem('tipoUsuario', response.tipoUsuario);
                sessionStorage.setItem('fotoPerfil', atob(response.fotoPerfil));
                sessionStorage.setItem('nome', response.nome);
                sessionStorage.setItem('autenticado', JSON.stringify(true));
                this._router.navigateByUrl('/apps/projetos/tarefas');
            }, erro => {
                this._alert.show('Login', erro.error, 'error');
            });
    }

    logout() {
        sessionStorage.clear();
        this._router.navigateByUrl('pages/auth/login');
    }

    isAutenticado(): boolean {
        if (sessionStorage.getItem('autenticado')) {
            return JSON.parse(sessionStorage.getItem('autenticado')) && (sessionStorage.getItem('token') !== null);
        }
        return false;
    }

    solicitarAcessoPesquisador(pesquisadorSolicitacao: PesquisadorSolicitacao){
        return this._http.post<boolean>(environment.url + '/usuario/solicitacao', JSON.stringify(pesquisadorSolicitacao), httpOptions);
    }
}
