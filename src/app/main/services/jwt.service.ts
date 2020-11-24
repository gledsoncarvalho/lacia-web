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

    private usuarioAutenticado: boolean = false;
    constructor(
        private _http: HttpClient, 
        private _alert: AlertComponent,
        private _router: Router) {
        httpOptions.headers.set('Access-Control-Allow-Origin', '*');
    }

    login(usuario: UserLogin) {
        this._http.post<UserResponse>(environment.url + '/login', JSON.stringify(usuario), httpOptions)
            .subscribe(response => {
                console.log(response.tipoUsuario);
                sessionStorage.setItem('token', response.token);
                sessionStorage.setItem('email', response.email);
                sessionStorage.setItem('tipoUsuario', response.tipoUsuario);
                sessionStorage.setItem('avatar', JSON.stringify(response.avatar));
                this.usuarioAutenticado = true;
                this._router.navigateByUrl('/apps/projetos/meus');
            }, erro => {
                this.usuarioAutenticado = false;
                this._alert.show('Login', 'Email/nome inválidos', 'error');
            });
    }

    logout() {
        sessionStorage.setItem('token', null);
        sessionStorage.setItem('email', null);
        sessionStorage.setItem('tipoUsuario', null);
        sessionStorage.setItem('avatar', null);
        this._router.navigateByUrl('pages/auth/login');
    }

    isAutenticado(): boolean {
        return this.usuarioAutenticado && (sessionStorage.getItem('token') !== null);
    }
}
