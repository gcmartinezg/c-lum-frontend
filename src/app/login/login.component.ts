import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../shared/domain/usuario';
import { UsuarioService } from '../shared/services/usuario.service';
import { LoginService } from '../shared/services/login.service';
import { SesionService } from '../shared/services/sesion.service';
import { MatSnackBar } from '@angular/material';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    private usuario: Usuario = new Usuario('', null, '', null, null);
    constructor(
        private router: Router,
        public usuarioService: UsuarioService,
        public loginService: LoginService,
        public sesionService: SesionService,
        public snackBar: MatSnackBar
    ) {}

    ngOnInit() {}

    openSnackBar(message: string, action: string) {
        this.snackBar.open(message, action, {
          duration: 3000,
        });
      }

    /*onLogin() {
        localStorage.setItem('isLoggedin', 'true');
        this.router.navigate(['/dashboard']);
    }*/

    onLogin() {
        this.loginService.tryLoginUser(this.usuario).subscribe(data=>{
          localStorage.setItem('isLoggedin', 'true');
          localStorage.setItem('usuario', this.usuario.usuarioId);
          this.router.navigate(['/dashboard']);
          this.openSnackBar(data.mensaje, 'Exito');
        }, error=>{
          this.openSnackBar(error.error.mensaje, 'Error');
        });
      }

      //TODO inpedir entrada de tecnico a portal web
}
