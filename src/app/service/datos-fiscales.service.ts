import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {DatosFiscales} from '../model/datos-fiscales';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Producto} from "../model/producto";

@Injectable({
  providedIn: 'root'
})
export class DatosFiscalesService {
urlEndPoint = 'http://localhost:8080/api/datos-fiscales';
httpHeaders: HttpHeaders = new HttpHeaders({'Content-type': 'Application/json'});
  constructor(private httpClient: HttpClient) { }
  getDatosFiscales(): Observable<DatosFiscales[]>{
    return this.httpClient.get<DatosFiscales[]>(this.urlEndPoint);
  }
  saveDatosFiscales(datosFiscales: DatosFiscales): Observable<DatosFiscales>{
    return this.httpClient.post<DatosFiscales>(this.urlEndPoint, datosFiscales, {headers: this.httpHeaders});
  }
  getDatosFiscalesById(id: number): Observable<DatosFiscales>{
    return this.httpClient.get<DatosFiscales>(`${this.urlEndPoint}/${id}`, {headers: this.httpHeaders});
  }
  updateDatosFiscales(datosFiscales: DatosFiscales): Observable<DatosFiscales>{
    return this.httpClient.put<DatosFiscales>(`${this.urlEndPoint}/${datosFiscales.id}`, datosFiscales, {headers: this.httpHeaders});
  }
}
