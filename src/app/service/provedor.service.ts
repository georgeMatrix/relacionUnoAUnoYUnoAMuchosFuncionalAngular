import { Injectable } from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {Provedor} from '../model/provedor';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import Swal from 'sweetalert2';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProvedorService {
urlEndPoint = 'http://localhost:8080/api/provedor';
httpHeaders: HttpHeaders = new HttpHeaders({'Content-type': 'Application/json'});
  constructor(private httpClient: HttpClient, private router: Router) { }
  getProvedores(): Observable<Provedor[]>{
    return this.httpClient.get<Provedor[]>(this.urlEndPoint);
  }
  saveProvedores(provedor: Provedor): Observable<any>{
    return this.httpClient.post<Provedor>(this.urlEndPoint, provedor, {headers: this.httpHeaders}).pipe(
      catchError(e => {
        Swal.fire('Error to saved record', e.error.message, 'error');
        return throwError(e);
      })
    );
  }
  getProvedorById(id: number): Observable<any>{
    return this.httpClient.get<Provedor>(`${this.urlEndPoint}/${id}`).pipe(
      catchError(e => {
        this.router.navigate(['/provedores']);
        console.error(e.error.message);
        Swal.fire('Record not found', e.error.message, 'error');
        return throwError(e);
      })
    );
  }
  updateProvedor(provedor: Provedor): Observable<any>{
    return this.httpClient.put<Provedor>(`${this.urlEndPoint}/${provedor.id}`, provedor, {headers: this.httpHeaders}).pipe(
      catchError(e => {
        Swal.fire('Error to update record', e.error.error, 'error');
        return throwError(e);
      }));
  }
}
