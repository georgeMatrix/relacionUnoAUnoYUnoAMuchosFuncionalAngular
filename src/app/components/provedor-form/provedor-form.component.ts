import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProvedorService} from '../../service/provedor.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Provedor} from '../../model/provedor';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-provedor-form',
  templateUrl: './provedor-form.component.html',
  styleUrls: ['./provedor-form.component.css']
})
export class ProvedorFormComponent implements OnInit {
formGroupProvedor: FormGroup;
  constructor(private formBuilder: FormBuilder, private provedorService: ProvedorService, private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.formGroupProvedor = formBuilder.group({
      id: ['', null],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      edad: ['', Validators.required],
      email: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.getProvedorById();
  }

  guardarProvedor(provedor: any): void{
    this.provedorService.saveProvedores(provedor).subscribe(response => {
      Swal.fire('Dato Guardado Correctamente', response.message, 'success');
      this.router.navigate(['/provedores']);
    });
  }
  getProvedorById(): void{
    this.activatedRoute.params.subscribe(params => {
      const id = params.id;
      if (id){
        this.provedorService.getProvedorById(id).subscribe(response => {
          this.formGroupProvedor.setValue(response.record);
        });
      }
    });
  }
  updateProvedor(provedor: Provedor): void{
    this.provedorService.updateProvedor(provedor).subscribe(response => {
      Swal.fire('Provedor actualizado correctamente', `Provedor: ${response.record}: ${response.message}`, 'success');
      this.router.navigate(['/provedores']);
    });
  }
}
