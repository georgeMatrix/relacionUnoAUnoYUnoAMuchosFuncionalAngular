import { Component, OnInit } from '@angular/core';
import {DatosFiscales} from '../../model/datos-fiscales';
import {DatosFiscalesService} from "../../service/datos-fiscales.service";

@Component({
  selector: 'app-datos-fiscales',
  templateUrl: './datos-fiscales.component.html',
  styleUrls: ['./datos-fiscales.component.css']
})
export class DatosFiscalesComponent implements OnInit {
datosFiscalesList: DatosFiscales[];
  constructor(private datosFiscalesService: DatosFiscalesService) { }

  ngOnInit(): void {
    this.datosFiscalesService.getDatosFiscales().subscribe(datosFiscalesL => this.datosFiscalesList = datosFiscalesL);
  }

}
