import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Cliente} from '../model/cliente';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
urlEndPoint = 'http://localhost:8080/api/clientes';
httpHeaders: HttpHeaders = new HttpHeaders({'Content-type': 'Application/json'});
  constructor(private httpClient: HttpClient) { }
  getClientes(): Observable<Cliente[]>{
    return this.httpClient.get<Cliente[]>(this.urlEndPoint);
  }
  saveClientes(cliente: Cliente): Observable<Cliente>{
    return this.httpClient.post<Cliente>(this.urlEndPoint, cliente, {headers: this.httpHeaders});
  }
}
