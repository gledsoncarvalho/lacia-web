import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { MeuPerfil } from '../apps/meu-perfil/meu-perfil';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    }),
    params: new HttpParams()
};

@Injectable({
    providedIn: 'root'
})
export class MeuPerfilService {

    constructor(private _http: HttpClient) {
        httpOptions.headers.set('Access-Control-Allow-Origin', '*');
        httpOptions.headers.set('Authorization', 'Bearer ' + sessionStorage.getItem('token'));
    }

    obterUsuario(): Observable<MeuPerfil> {
        httpOptions.params.set('email', sessionStorage.getItem('email'));
        return this._http.get<MeuPerfil>(environment.url + '/usuario', httpOptions);
    }
}
