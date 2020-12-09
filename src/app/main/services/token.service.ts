import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  retornarToken() {
    return sessionStorage.getItem('token');
  }
}
