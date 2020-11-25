import { UserPassword } from './../models/user-password.model';
import { AlertComponent } from './../../../@fuse/components/alert/alert.component';
import { UserResponse } from './../models/user-response.model';
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

    constructor(private _http: HttpClient, private alert: AlertComponent) {
        httpOptions.headers.set('Access-Control-Allow-Origin', 'http://localhost:4200');
        httpOptions.headers.set('Access-Control-Allow-Methods', 'POST, GET, DELETE, PUT');
        httpOptions.headers.set('Access-Control-Allow-Headers', '*');
    }

    obterUsuario(): Observable<MeuPerfil> {
        return this._http.post<MeuPerfil>(environment.url + '/usuarioObter', sessionStorage.getItem('email'), httpOptions);
    }

    atualizarUsuario(meuPerfil: MeuPerfil){
        return this._http.put<MeuPerfil>(environment.url + '/usuario', JSON.stringify(meuPerfil), httpOptions);
    }

    atualizarImagem(fotoPerfil: any, id: number){
        return this._http.put<UserResponse>(environment.url + `/usuario/imagem/${id}`, fotoPerfil, httpOptions)
            .subscribe(response => {
                sessionStorage.setItem('token', response.token);
                sessionStorage.setItem('email', response.email);
                sessionStorage.setItem('tipoUsuario', response.tipoUsuario);
                sessionStorage.setItem('fotoPerfil', atob(response.fotoPerfil));
                sessionStorage.setItem('nome', response.nome);
                this.alert.show("Atualização", "Imagem do meu perfil alterada com sucesso", "success");
            }, error => this.alert.show("Erro", "Não foi possível alterar a imagem", "error"))
    }

    atualizarSenha(userPassword: UserPassword, id: number){
        return this._http.put<boolean>(environment.url + `/usuario/senha/${id}`, JSON.stringify(userPassword), httpOptions);
    }
}
