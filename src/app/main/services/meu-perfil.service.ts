import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { MeuPerfil } from './../apps/meu-perfil/meu-perfil';

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
export class MeuPerfilService {

    constructor(private _http: HttpClient) {
        httpOptions.headers.set('Access-Control-Allow-Origin', 'http://localhost:4200');
        httpOptions.headers.set('Access-Control-Allow-Methods', 'POST, GET, DELETE, PUT');
        httpOptions.headers.set('Access-Control-Allow-Headers', '*');
    }

    obterUsuario(): Observable<MeuPerfil> {
        return this._http.post<MeuPerfil>(environment.url + '/usuarioObter', sessionStorage.getItem('email'), httpOptions);
    }

    atualizarUsuario(meuPerfil: MeuPerfil) {
        return this._http.put<MeuPerfil>(environment.url + '/usuario', JSON.stringify(meuPerfil), httpOptions);
    }

    atualizarImagem(fotoPerfil: any, id: number){
        return this._http.put<boolean>(environment.url + `/usuario/imagem/${id}`, fotoPerfil, httpOptions);
    }
}
