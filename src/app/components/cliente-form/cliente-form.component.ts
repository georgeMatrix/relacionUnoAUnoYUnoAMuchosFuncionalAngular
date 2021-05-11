import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ClienteService} from '../../service/cliente.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Cliente} from "../../model/cliente";

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent implements OnInit {
formGroupCliente: FormGroup;
  constructor(private formBuilder: FormBuilder, private clienteService: ClienteService, private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.formGroupCliente = formBuilder.group({
      id: ['', null],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      edad: ['', Validators.required],
      email: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.getClienteById();
  }

  guardarCliente(clientes: any): void{
    this.clienteService.saveClientes(clientes).subscribe(response => this.router.navigate(['/clientes']));
  }
  getClienteById(): void{
    this.activatedRoute.params.subscribe(params => {
      const id = params.id;
      if (id){
        this.clienteService.getClienteById(id).subscribe(response => {
          // console.log(response.record);
          this.formGroupCliente.setValue(response.record);
        });
      }
    });
  }
  updateCliente(cliente: Cliente): void{
    this.clienteService.updateCliente(cliente).subscribe(response => {
      // console.log(response);
      this.router.navigate(['/clientes']);
    });
  }
}
