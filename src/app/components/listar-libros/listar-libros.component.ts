import { Component } from '@angular/core';
import { ILibro } from '../../interfaces/ILibro';
import { LibroService } from '../../services/libro.service';

@Component({
  selector: 'app-listar-libros',
  templateUrl: './listar-libros.component.html',
  styleUrl: './listar-libros.component.css'
})
export class ListarLibrosComponent {
  items:ILibro[]=[];

  constructor(private _libroService : LibroService) {}

  ngOnInit() : void {
    this.getLibros();
  }

  getLibros() : void{
    this._libroService.getListaLibros().subscribe((data) => {
      this.items = data;
    });
  }

  eliminarLibro(id : number) {
    this._libroService.deleteLibro(id).subscribe(() => {
      this.getLibros();
    });  
  }
}
