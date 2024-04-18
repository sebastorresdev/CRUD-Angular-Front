import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
  usuario : string = '';
  contrasenia : string = '';

  constructor(
    private _router : Router,
    private toastr: ToastrService
  ) {}
  
  
  irAlInicio() {
    this._router.navigate(['inicio']);
  }

  validaLogin() {
    if (this.usuario == 'sebas' && this.contrasenia == 'gal22v10') {
      this.toastr.success('Sesión iniciada correctamente', 'LOGIN');
      this._router.navigate(['/dashboard']);

    }
    else {
      this.toastr.error('Usuario y contraseña incorrecta', 'ERROR');
    }
  }
}
