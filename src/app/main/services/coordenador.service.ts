import { SessionService } from './session.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { AlertComponent } from './../../../@fuse/components/alert/alert.component';
import { Coordenador } from '../models/coordenador.model';

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
export class CoordenadorService {

    httpOptions: any;

    constructor(private _http: HttpClient, private alert: AlertComponent, private sessionService: SessionService ) {
        this.httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.sessionService.get('token'),
                'Access-Control-Allow-Origin': 'http://localhost:4200',
                'Access-Control-Allow-Methods': 'POST, GET, DELETE, PUT',
                'Access-Control-Allow-Headers': '*'

            })
        };
    }

    obterCoordenadores(){
      return this._http.get<Coordenador[]>(environment.url + '/coordenadores', this.httpOptions);
    }
}
