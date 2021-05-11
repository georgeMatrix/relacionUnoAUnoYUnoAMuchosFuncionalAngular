import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Producto} from '../model/producto';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
urlEndPoint = 'http://localhost:8080/api/productos';
httpHeaders: HttpHeaders = new HttpHeaders({'Content-type': 'Application/json'});
  constructor(private httpClient: HttpClient) { }
  getProductos(): Observable<Producto[]>{
    return this.httpClient.get<Producto[]>(this.urlEndPoint);
  }
  saveProductos(producto: Producto): Observable<Producto>{
    return this.httpClient.post<Producto>(this.urlEndPoint, producto, {headers: this.httpHeaders});
  }
  getProductoById(id: number): Observable<Producto>{
    return this.httpClient.get<Producto>(`${this.urlEndPoint}/${id}`, {headers: this.httpHeaders});
  }
  updateProducto(producto: Producto): Observable<Producto>{
    return this.httpClient.put<Producto>(`${this.urlEndPoint}/${producto.id}`, producto, {headers: this.httpHeaders});
  }
}
