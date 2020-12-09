import { Injectable } from '@angular/core';
import { SessionStorageModel } from '../models/session-storage.model';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  sessionStorageModel: SessionStorageModel = {} as SessionStorageModel;

  constructor() { }

  public set(key: string, value: string){
    this.sessionStorageModel[key] = value;
  }

  public get(key: string) {
    return this.sessionStorageModel[key];
  }

  public remove(key: string) {
    this.sessionStorageModel[key] = null;
  }

  public clear() {
    this.sessionStorageModel = {} as SessionStorageModel;
  }
}
