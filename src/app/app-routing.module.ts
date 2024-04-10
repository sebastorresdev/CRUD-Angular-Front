import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarAutoresComponent } from './components/listar-autores/listar-autores.component';
import { ListarLibrosComponent } from './components/listar-libros/listar-libros.component';
import { PresentacionComponent } from './components/presentacion/presentacion.component';
import { AddEditAutorComponent } from './components/add-edit-autor/add-edit-autor.component';
import { AddEditLibroComponent } from './components/add-edit-libro/add-edit-libro.component';

const routes: Routes = [
  {path:'', component:PresentacionComponent},
  {path:'autores', component:ListarAutoresComponent},
  {path:'libros', component:ListarLibrosComponent},
  {path:'add-autores', component:AddEditAutorComponent},
  {path:'edit-autores/:id', component:AddEditAutorComponent},
  {path:'add-libros', component:AddEditLibroComponent},
  {path:'edit-libros/:id', component:AddEditLibroComponent},
  {path:'**', redirectTo:'', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
