import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// componentes
import { ListarAutoresComponent } from './components/listar-autores/listar-autores.component';
import { ListarLibrosComponent } from './components/listar-libros/listar-libros.component';
import { AddEditAutorComponent } from './components/add-edit-autor/add-edit-autor.component';
import { AddEditLibroComponent } from './components/add-edit-libro/add-edit-libro.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PresentacionComponent } from './components/presentacion/presentacion.component';

const routes: Routes = [  
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'dashboard', component:DashboardComponent, children:[
    {path:'presentacion', component:PresentacionComponent},
    {path:'autores', component:ListarAutoresComponent},
    {path:'libros', component:ListarLibrosComponent},
    {path:'add-autores', component:AddEditAutorComponent},
    {path:'edit-autores/:id', component:AddEditAutorComponent},
    {path:'add-libros', component:AddEditLibroComponent},
    {path:'edit-libros/:id', component:AddEditLibroComponent},
  ]},
  {path:'**', redirectTo:'login', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
