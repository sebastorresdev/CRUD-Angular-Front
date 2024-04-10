import { Component } from '@angular/core';
import { IAutor } from '../../interfaces/IAutor';
import { AutorService } from '../../services/autor.service';

@Component({
  selector: 'app-listar-autores',
  templateUrl: './listar-autores.component.html',
  styleUrl: './listar-autores.component.css'
})
export class ListarAutoresComponent {
  items: IAutor[]=[];
  
  constructor(private _autorService: AutorService) {}

  ngOnInit():void {
    this.getListaAutores();
  }

  getListaAutores() {
    this._autorService.getListaAutores().subscribe((data) => {
      this.items = data;
    });
  }

  eliminarAutor(id : number) : void{
    this._autorService.deleteAutor(id).subscribe(() => {
      this.getListaAutores();
    });
  }
}
