import { Component, OnInit } from '@angular/core';
import {ClienteService} from "../../service/cliente.service";
import {Cliente} from "../../model/cliente";

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
clientes: Cliente[];
  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.clienteService.getClientes().subscribe(clientes => this.clientes = clientes);
  }

}
