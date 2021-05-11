import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductoService} from '../../service/producto.service';
import {ProvedorService} from '../../service/provedor.service';
import {Provedor} from '../../model/provedor';

@Component({
  selector: 'app-producto-form',
  templateUrl: './producto-form.component.html',
  styleUrls: ['./producto-form.component.css']
})
export class ProductoFormComponent implements OnInit {
formGroupProducto: FormGroup;
  provedores: Provedor[];
  constructor(private productoService: ProductoService, private formBuilder: FormBuilder, private router: Router,
              private provedorService: ProvedorService, private activatedRoute: ActivatedRoute) {
    this.formGroupProducto = formBuilder.group({
      id: ['', Validators.required],
      nombre: ['', Validators.required],
      clave: ['', Validators.required],
      precio: ['', Validators.compose([Validators.required, Validators.pattern('^[0-9]*$')])],
      idProvedor: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.provedorService.getProvedores().subscribe(provedores => this.provedores = provedores);
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
          this.formGroupProducto.setValue(response);
        });
      }
    });
  }
}
