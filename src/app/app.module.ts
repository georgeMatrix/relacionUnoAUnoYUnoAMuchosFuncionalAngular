import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MenuComponent } from './components/menu/menu.component';
import {RouterModule, Routes} from '@angular/router';
import { ProductoComponent } from './components/producto/producto.component';
import { DatosFiscalesComponent } from './components/datos-fiscales/datos-fiscales.component';
import {HttpClientModule} from '@angular/common/http';
import { ProvedorFormComponent } from './components/provedor-form/provedor-form.component';
import { ProductoFormComponent } from './components/producto-form/producto-form.component';
import { DatosFiscalesFormComponent } from './components/datos-fiscales-form/datos-fiscales-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {ProvedorComponent} from './components/provedor/provedor.component';

const MENU: Routes = [
  {path: 'provedores', component: ProvedorComponent},
  {path: 'provedor-form', component: ProvedorFormComponent},
  {path: 'provedor-form/:id', component: ProvedorFormComponent},
  {path: 'datos-fiscales', component: DatosFiscalesComponent},
  {path: 'datos-fiscales-form', component: DatosFiscalesFormComponent},
  {path: 'datos-fiscales-form/:id', component: DatosFiscalesFormComponent},
  {path: 'productos', component: ProductoComponent},
  {path: 'producto-form', component: ProductoFormComponent},
  {path: 'producto-form/:id', component: ProductoFormComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ProvedorComponent,
    ProductoComponent,
    DatosFiscalesComponent,
    ProvedorFormComponent,
    ProductoFormComponent,
    DatosFiscalesFormComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(MENU),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
