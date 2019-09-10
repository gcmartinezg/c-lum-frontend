import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../shared/domain/usuario';
import { UsuarioService } from '../shared/services/usuario.service';
import { LoginService } from '../shared/services/login.service';
import { MatSnackBar } from '@angular/material';
import { SesionService } from '../shared/services/sesion.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    
    private usuario : Usuario = new Usuario('',null,null,'',null);

    constructor(
        private router: Router,
        private servicioUsuario : UsuarioService,
        private servicioLogin : LoginService,
        private servicioSesion : SesionService,
        private snackBar : MatSnackBar
        ) {}

    ngOnInit() {}

    abrirSnackBar(message : string){
        this.snackBar.open(message, 'OK');
    }
/*
    onLogin() {
        this.servicioLogin.tryLoginUser(this.usuario).subscribe(data=>{
            this.servicioUsuario.findById(this.usuario.usuUsuario).subscribe(usu=>{
                this.servicioSesion.setUsuarioLogueado(usu);
                this.servicioSesion.setTipoUsuarioLogueado(usu.tiusId);
                
            });
            //console.log(this.user);
            this.router.navigate(['/dashboard']);
        }, error=>{
            console.log(error.error.mensaje);
            this.abrirSnackBar(error.error.mensaje);
        });
        //localStorage.setItem('isLoggedin', 'true');
        //this.router.navigate(['/dashboard']);
    }
*/
    onLogin() {
        this.servicioLogin.tryLoginUser(this.usuario).subscribe(data=>{
          localStorage.setItem('isLoggedin', 'true');
          localStorage.setItem('usuario', this.usuario.usuUsuario);
          this.router.navigate(['/dashboard']);
          this.abrirSnackBar(data.mensaje);
        }, error=>{
          this.abrirSnackBar(error.error.mensaje);
        });
      }
}
