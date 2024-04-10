import { Component } from '@angular/core';
import { ILibro } from '../../interfaces/ILibro';

@Component({
  selector: 'app-listar-libros',
  templateUrl: './listar-libros.component.html',
  styleUrl: './listar-libros.component.css'
})
export class ListarLibrosComponent {
  items:ILibro[]=[];

  ngOnInit() {
    this.items.push(
      { id: 1, titulo: "El Laberinto de los Espíritus", isbn: "9788408163384", anio: 2016},
      { id: 2, titulo: "Cien años de soledad", isbn: "9780307350417", anio: 1967},
      { id: 3, titulo: "El Aleph", isbn: "9789871147903", anio: 1949},
      { id: 4, titulo: "El amor en los tiempos del cólera", isbn: "9788432202523", anio: 1985},
      { id: 5, titulo: "Don Quijote de la Mancha", isbn: "9788437602375", anio: 1605},
      { id: 6, titulo: "Crónica de una muerte anunciada", isbn: "9788497592438", anio: 1981},
      { id: 7, titulo: "Rayuela", isbn: "9788437601736", anio: 1963},
      { id: 8, titulo: "La Ciudad y los Perros", isbn: "9788432248019", anio: 1962},
      { id: 9, titulo: "La Tregua", isbn: "9789974955005", anio: 1960},
      { id: 10, titulo: "Ficciones", isbn: "9789871106115", anio: 1944}
  );
  
  }
}
