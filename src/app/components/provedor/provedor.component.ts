import { Component, OnInit } from '@angular/core';
import {ProvedorService} from '../../service/provedor.service';
import {Provedor} from '../../model/provedor';

@Component({
  selector: 'app-provedor',
  templateUrl: './provedor.component.html',
  styleUrls: ['./provedor.component.css']
})
export class ProvedorComponent implements OnInit {
provedores: Provedor[];
  constructor(private provedorService: ProvedorService) { }

  ngOnInit(): void {
    this.provedorService.getProvedores().subscribe(provedores => this.provedores = provedores);
  }
}
