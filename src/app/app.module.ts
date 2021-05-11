import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MenuComponent } from './components/menu/menu.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import {RouterModule, Routes} from '@angular/router';
import { ProductoComponent } from './components/producto/producto.component';
import { DatosFiscalesComponent } from './components/datos-fiscales/datos-fiscales.component';
import {HttpClientModule} from '@angular/common/http';
import { ClienteFormComponent } from './components/cliente-form/cliente-form.component';
import { ProductoFormComponent } from './components/producto-form/producto-form.component';
import { DatosFiscalesFormComponent } from './components/datos-fiscales-form/datos-fiscales-form.component';
import {ReactiveFormsModule} from '@angular/forms';

const MENU: Routes = [
  {path: 'clientes', component: ClienteComponent},
  {path: 'cliente-form', component: ClienteFormComponent},
  {path: 'cliente-form/:id', component: ClienteFormComponent},
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
    ClienteComponent,
    ProductoComponent,
    DatosFiscalesComponent,
    ClienteFormComponent,
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
