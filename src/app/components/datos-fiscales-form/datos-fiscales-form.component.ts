import { Component, OnInit } from '@angular/core';
import {Provedor} from '../../model/provedor';
import {ProvedorService} from '../../service/provedor.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DatosFiscalesService} from '../../service/datos-fiscales.service';
import {ActivatedRoute, Router} from '@angular/router';
import {DatosFiscales} from '../../model/datos-fiscales';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-datos-fiscales-form',
  templateUrl: './datos-fiscales-form.component.html',
  styleUrls: ['./datos-fiscales-form.component.css']
})
export class DatosFiscalesFormComponent implements OnInit {
provedores: Provedor[];
formGroupDatosFiscales: FormGroup;
  constructor(private formBuilder: FormBuilder,
              private provedorService: ProvedorService,
              private datosFiscalesService: DatosFiscalesService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.formGroupDatosFiscales = this.formBuilder.group({
      id: ['', Validators.required],
      rfc: ['', Validators.required],
      curp: ['', Validators.required],
      bandera: ['', null]
    });
  }

  ngOnInit(): void {
    this.provedorService.getProvedores().subscribe(provedores => this.provedores = provedores);
    this.getDatosFiscalesById();
  }
  guardarDatosFiscales(datosFiscales: any): void{
    this.datosFiscalesService.saveDatosFiscales(datosFiscales).subscribe(response => this.router.navigate(['/datos-fiscales']));
  }
  getDatosFiscalesById(): void{
    this.activatedRoute.params.subscribe(params => {
      const id = params.id;
      if (id){
        this.datosFiscalesService.getDatosFiscalesById(id).subscribe(response => {
          this.formGroupDatosFiscales.setValue(response);
        });
      }
    });
  }
  updateDatosFiscales(datosFiscales: DatosFiscales): void{
    this.datosFiscalesService.updateDatosFiscales(datosFiscales).subscribe(response => {
      Swal.fire('Dato actualizado correctamente', '', 'warning');
      this.router.navigate(['/datos-fiscales']);
    });
  }
}
