import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-producto-form',
  templateUrl: './producto-form.component.html',
  styleUrls: ['./producto-form.component.css']
})
export class ProductoFormComponent implements OnInit {
formGroupProducto: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.formGroupProducto = formBuilder.group({
      nombre: ['', Validators.required],
      clave: ['', Validators.required],
      precio: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

}
