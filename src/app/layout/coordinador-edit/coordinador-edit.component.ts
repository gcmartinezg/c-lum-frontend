import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar, MatDialog, MatDialogConfig } from '@angular/material';
import { SesionService } from 'src/app/shared/services/sesion.service';
import { UsuarioService } from 'src/app/shared/services/usuario.service';
import { TerceroService } from 'src/app/shared/services/tercero.service';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { Usuario } from 'src/app/shared/domain/usuario';
import { Tercero } from 'src/app/shared/domain/tercero';

@Component({
  selector: 'app-coordinador-edit',
  templateUrl: './coordinador-edit.component.html',
  styleUrls: ['./coordinador-edit.component.scss']
})
export class CoordinadorEditComponent implements OnInit {

  usuario : Usuario = new Usuario("",null,"",null,null);
  tercero : Tercero = new Tercero(null,null,"","","",null,null);

  constructor(private snackBar: MatSnackBar,
    public servicioUsuario: UsuarioService,
    public servicioTercero: TerceroService,
    private matDialog : MatDialog,

    ) {
     }

  ngOnInit() {
    this.getUsuario();
  
  }

  getUsuario(){
    let nombreUsuario= localStorage.getItem('usuario');
    this.servicioUsuario.findById(nombreUsuario).subscribe(result=>{
      this.usuario=result;
      console.log(result);
      this.getTerceroPorId();
    });

  }

  getTerceroPorId(){
    console.log("h"+this.usuario.terceroId_Tercero);
    this.servicioTercero.findById(""+this.usuario.terceroId_Tercero).subscribe(result=>{
      this.tercero=result;

    });

  }
  
  

  abrirSnackBar(message: string, action: string){
    this.snackBar.open(message, action, {
      duration: 3000,
    });
  }

  retornarMatDialogConfig(datos : any) : MatDialogConfig<any>{
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = datos;

    return dialogConfig;
  }

  actualizar() {
    if(this.tercero.telefono==null || this.tercero.telefono<=0){
      return this.snackBar.open('Revise el telefono por favor', 'ERROR', {
        duration: 3000,
      });
    }
    if(this.tercero.email==null || this.tercero.email==""){
      return this.snackBar.open('Revise el email por favor', 'ERROR', {
        duration: 3000,
      });
    }
    if(this.tercero.direccion==null || this.tercero.direccion==""){
      return this.snackBar.open('Revise la direccion por favor', 'ERROR', {
        duration: 3000,
      });
    }
    let data = {
      title : "Actualizar Coordinador", 
      body : "¿Esta usted seguro de querer actualizar su información " +
       this.tercero.nombreTercero + "?"
    };
    
    let matDialogRef = this.matDialog.open(
      ConfirmationDialogComponent,
      this.retornarMatDialogConfig(data)
    );

    matDialogRef.afterClosed().subscribe(result=>{
      if(result === true){
      this.servicioTercero.update(this.tercero).subscribe(
        data=>{
          this.abrirSnackBar(data.mensaje,"OK");
        },
        error=>{
          this.abrirSnackBar(error.error.mensaje, 'OK');
        });
      }

    });

  }




}
