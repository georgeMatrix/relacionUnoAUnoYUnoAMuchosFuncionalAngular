import { Injectable } from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {Cliente} from '../model/cliente';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import Swal from 'sweetalert2';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
urlEndPoint = 'http://localhost:8080/api/clientes';
httpHeaders: HttpHeaders = new HttpHeaders({'Content-type': 'Application/json'});
  constructor(private httpClient: HttpClient, private router: Router) { }
  getClientes(): Observable<Cliente[]>{
    return this.httpClient.get<Cliente[]>(this.urlEndPoint);
  }
  saveClientes(cliente: Cliente): Observable<Cliente>{
    return this.httpClient.post<Cliente>(this.urlEndPoint, cliente, {headers: this.httpHeaders}).pipe(
      catchError(e => {
        Swal.fire('Error to saved record', e.error.message, 'error');
        return throwError(e);
      })
    );
  }
  getClienteById(id: number): Observable<any>{
    return this.httpClient.get<Cliente>(`${this.urlEndPoint}/${id}`).pipe(
      catchError(e => {
        this.router.navigate(['/clientes']);
        console.error(e.error.message);
        Swal.fire('Record not found', e.error.message, 'error');
        return throwError(e);
      })
    );
  }
  updateCliente(cliente: Cliente): Observable<any>{
    return this.httpClient.put<Cliente>(`${this.urlEndPoint}/${cliente.id}`, cliente, {headers: this.httpHeaders});
    // .pipe(
    //   catchError(e => {
    //     Swal.fire('Error to update record', e.error.message, 'error');
    //     return throwError(e);
    //   })
  }
}
