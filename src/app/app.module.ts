import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// modulos
import { ReactiveFormsModule } from '@angular/forms';

// components
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddEditAutorComponent } from './components/add-edit-autor/add-edit-autor.component';
import { AddEditLibroComponent } from './components/add-edit-libro/add-edit-libro.component';
import { ListarLibrosComponent } from './components/listar-libros/listar-libros.component';
import { ListarAutoresComponent } from './components/listar-autores/listar-autores.component';
import { PresentacionComponent } from './components/presentacion/presentacion.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddEditAutorComponent,
    AddEditLibroComponent,
    ListarLibrosComponent,
    ListarAutoresComponent,
    PresentacionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
