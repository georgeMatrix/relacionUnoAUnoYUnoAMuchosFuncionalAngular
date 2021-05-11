import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductoService} from '../../service/producto.service';
import {ClienteService} from "../../service/cliente.service";
import {Cliente} from "../../model/cliente";

@Component({
  selector: 'app-producto-form',
  templateUrl: './producto-form.component.html',
  styleUrls: ['./producto-form.component.css']
})
export class ProductoFormComponent implements OnInit {
formGroupProducto: FormGroup;
clientes: Cliente[];
  constructor(private productoService: ProductoService, private formBuilder: FormBuilder, private router: Router,
              private clienteService: ClienteService, private activatedRoute: ActivatedRoute) {
    this.formGroupProducto = formBuilder.group({
      id: ['', Validators.required],
      nombre: ['', Validators.required],
      clave: ['', Validators.required],
      precio: ['', Validators.required],
      idCliente: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.clienteService.getClientes().subscribe(clientes => this.clientes = clientes);
    this.getProductoById();
  }
  guardarProducto(productos: any): void{
      this.productoService.saveProductos(productos).subscribe(response => this.router.navigate(['/productos']));
  }
  updateProducto(producto: any): void{
    this.productoService.updateProducto(producto).subscribe(response => this.router.navigate(['/productos']));
  }
  getProductoById(): void{
    this.activatedRoute.params.subscribe(params => {
      const id = params.id;
      if (id){
        this.productoService.getProductoById(id).subscribe(response => {
          // console.log(response);
          this.formGroupProducto.setValue(response);
        });
      }
    });
  }
}
