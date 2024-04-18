import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LibroService } from '../../services/libro.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ILibro } from '../../interfaces/ILibro';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-edit-libro',
  templateUrl: './add-edit-libro.component.html',
  styleUrl: './add-edit-libro.component.css'
})
export class AddEditLibroComponent {
  inputValid: boolean = false;
  form: FormGroup;
  id: number;
  titulo: string = 'Agregar';

  constructor(
              private fb: FormBuilder, 
              private _libroService: LibroService, 
              private router: Router, 
              private aRouter: ActivatedRoute,
              private toastr: ToastrService) {

    this.form = this.fb.group({
      titulo: ['', Validators.required],
      isbn: ['', Validators.required],
      anio: [0, Validators.required]
    })
    if (aRouter.snapshot.paramMap.get('id') == null) {
      this.id = -1;
    }
    else {
      this.id = Number(aRouter.snapshot.paramMap.get('id'));
      this.titulo = 'Editar';
      this.getLibro(this.id);
    }
  }

  addLibro() {
    this.inputValid = true;
    if (!this.form.invalid) {
      const autor: ILibro = {
        titulo: this.form.value.titulo,
        isbn: this.form.value.isbn,
        anio: this.form.value.anio
      }

      if (this.id == -1) {
        console.log(this.id);
        this._libroService.saveLibro(autor).subscribe(() => {
          console.log('Libro agregado correctamente');
          this.toastr.success('Libro agregado correctamente', 'REGISTRO');
          this.router.navigate(['dashboard/libros'])
        })
      }
      else {
        autor.id = this.id;
        console.log(autor);
        this._libroService.updateLibro(this.id, autor).subscribe(() => {
          console.log('libro actualizado correctamente');
          this.toastr.success('Libro actualizado correctamente', 'ACTUALIZACION');
          this.router.navigate(['dashboard/libros'])
        })
      }
    }
  }

  getLibro(id: number) {
    this._libroService.getLibro(id).subscribe((libro: ILibro) => {
      this.form.setValue({
        titulo: libro.titulo,
        isbn: libro.isbn,
        anio: libro.anio
      })
    })
  }
}
