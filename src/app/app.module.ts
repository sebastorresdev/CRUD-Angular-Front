import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// modulos
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// components
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddEditAutorComponent } from './components/add-edit-autor/add-edit-autor.component';
import { AddEditLibroComponent } from './components/add-edit-libro/add-edit-libro.component';
import { ListarLibrosComponent } from './components/listar-libros/listar-libros.component';
import { ListarAutoresComponent } from './components/listar-autores/listar-autores.component';
import { PresentacionComponent } from './components/presentacion/presentacion.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddEditAutorComponent,
    AddEditLibroComponent,
    ListarLibrosComponent,
    ListarAutoresComponent,
    PresentacionComponent,
    LoginComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
