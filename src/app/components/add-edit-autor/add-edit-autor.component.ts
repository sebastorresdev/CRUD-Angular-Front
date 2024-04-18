import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AutorService } from '../../services/autor.service';
import { IAutor } from '../../interfaces/IAutor';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-add-edit-autor',
  templateUrl: './add-edit-autor.component.html',
  styleUrl: './add-edit-autor.component.css'
})
export class AddEditAutorComponent {
  form: FormGroup;
  inputValid: boolean;
  id: number;
  titulo: string = 'Agregar';

  constructor(
          private fb: FormBuilder, 
          private _autorService: AutorService, 
          private router: Router, 
          private aRouter: ActivatedRoute, 
          private toastr: ToastrService
        ) {
          
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      pais: ['', Validators.required],
    })
    this.inputValid = false;
    if (aRouter.snapshot.paramMap.get('id') == null) {
      this.id = -1;
    }
    else {
      this.id = Number(aRouter.snapshot.paramMap.get('id'));
      this.titulo = 'Editar';
      this.getAutor(this.id);
    }
  }

  addAutor() {
    this.inputValid = true;
    if (!this.form.invalid) {
      const autor: IAutor = {
        nombre: this.form.value.nombre,
        apellido: this.form.value.apellido,
        pais: this.form.value.pais
      }

      if (this.id == -1) {
        console.log(this.id);
        this._autorService.saveAutor(autor).subscribe(() => {
          console.log('Autor agregado correctamente');
          this.toastr.success('Autor registrado correctamente', 'REGISTRO');
          this.router.navigate(['dashboard/autores'])
        })
      }
      else {
        autor.id = this.id;
        console.log(autor);
        this._autorService.updateAutor(this.id, autor).subscribe(() => {
          this.toastr.success('Autor modificado correctamente', 'ACTUALIZACION');
          this.router.navigate(['dashboard/autores'])
        })
      }
    }
  }

  getAutor(id: number) {
    this._autorService.getAutor(id).subscribe((data: IAutor) => {
      console.log(data);
      this.form.setValue({
        nombre: data.nombre,
        apellido: data.apellido,
        pais: data.pais
      })
    })
  }
}
