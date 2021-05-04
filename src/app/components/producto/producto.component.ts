import { Component, OnInit } from '@angular/core';
import {ProductoService} from '../../service/producto.service';
import {Producto} from '../../model/producto';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
productos: Producto[];
  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {
    this.productoService.getProductos().subscribe(productos => this.productos = productos);
  }

}
