import { Projeto } from './../models/projeto.model';
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
export class CartaoTarefaService {

    constructor(private _http: HttpClient, private alert: AlertComponent) {
        httpOptions.headers.set('Access-Control-Allow-Origin', 'http://localhost:4200');
        httpOptions.headers.set('Access-Control-Allow-Methods', 'POST, GET, DELETE, PUT');
        httpOptions.headers.set('Access-Control-Allow-Headers', '*');
    }

    atualizarCartaoTarefa(cartao: any){
      return this._http.put<any>(environment.url + '/cartaoTarefa/atualizar', JSON.stringify(cartao), httpOptions);
  }

    excluirCartaoTarefa(idCartaoTarefa: number){
      return this._http.delete<boolean>(environment.url + `/cartaoTarefa/excluir/${idCartaoTarefa}`, httpOptions)
    }

    cadastrarCartaoTarefa(cartao: any){
      return this._http.post<boolean>(environment.url + '/cartaoTarefa', JSON.stringify(cartao), httpOptions);
    }

}

