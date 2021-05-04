import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ClienteService} from '../../service/cliente.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent implements OnInit {
formGroupCliente: FormGroup;
  constructor(private formBuilder: FormBuilder, private clienteService: ClienteService, private router: Router) {
    this.formGroupCliente = formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      edad: ['', Validators.required],
      email: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  guardarCliente(clientes: any): void{
    this.clienteService.saveClientes(clientes).subscribe(response => this.router.navigate(['/clientes']));
    // console.log('guardar cliente');
    // console.log(datos);
  }
}
