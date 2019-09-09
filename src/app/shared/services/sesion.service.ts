import { Injectable } from '@angular/core';
import { Usuario } from '../domain/usuario';
import { UsuarioService } from './usuario.service';

@Injectable({
  providedIn: 'root'
})
export class SesionService {
  sesionActiva : boolean;
  public usuarioLogueado: Usuario;
  public tipoUsuario : string;

  private tipoUsuarioDisponibles : string[] = ['admin', 'supervisor'];

  constructor(private userService : UsuarioService) { 
    /*if(this.getUserLoggedIn() != null){
      console.log("something in localstorage");
      this.userService.findById(this.getUserLoggedIn().usuUsuario).subscribe(user=>{
        if(user != null){
          console.log("user found in database");
          if(user.activo === 'S'){
            console.log("user is active");
            this.setUserLoggedIn(user);
          }
          else{
            this.setUserLoggedIn(null);
            localStorage.clear();
          }
        }else{
          this.setUserLoggedIn(null);
          localStorage.clear();
        }
      });
    }*/

    this.sesionActiva = false;
  }

  setUsuarioLogueado(user : Usuario){
    if(user != null){
      localStorage.setItem('currentUser', JSON.stringify(user));
      this.usuarioLogueado = user;
      this.verificarUsuarioLogueado();
    }

  }

  setTipoUsuarioLogueado(tiusId : number){
    if(tiusId != null || tiusId > 0 || tiusId <= 3){
      let userType = this.tipoUsuarioDisponibles[tiusId-1];
      localStorage.setItem('userTypeCurrentUser', userType);
      this.tipoUsuario = userType;
    }

  }

  private verificarUsuarioLogueado(){
    if(this.usuarioLogueado != null){
      this.sesionActiva = true;
    }

  }

  getUsuarioLogueado() {
  	return JSON.parse(localStorage.getItem('currentUser'));
  }

  getTipoUsuarioLogueado(){
    return localStorage.getItem('userTypeCurrentUser');
  }
}
