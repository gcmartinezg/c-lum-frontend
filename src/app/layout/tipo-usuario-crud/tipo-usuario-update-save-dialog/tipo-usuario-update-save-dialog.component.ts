import { Component, OnInit, Inject } from '@angular/core';
import { TipoUsuario } from 'src/app/shared/domain/tipo-usuario';
import { Estado } from 'src/app/shared/domain/estado';
import { MatDialogRef, MatSnackBar, MatDialog, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material';
import { UpdateSaveObject } from 'src/app/shared/domain/update-save-object';
import { TipoUsuarioService } from 'src/app/shared/services/tipo-usuario.service';
import { EstadoService } from 'src/app/shared/services/estado.service';
import { ConfirmationDialogComponent } from '../../confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-tipo-usuario-update-save-dialog',
  templateUrl: './tipo-usuario-update-save-dialog.component.html',
  styleUrls: ['./tipo-usuario-update-save-dialog.component.scss']
})
export class TipoUsuarioUpdateSaveDialogComponent implements OnInit {

  tipoUsuario : TipoUsuario = new TipoUsuario(null,"");
  
  listaEstado : Estado[];

  constructor(
    private dialogRef: MatDialogRef<TipoUsuarioUpdateSaveDialogComponent>,
    private snackBar : MatSnackBar,
    private matDialog : MatDialog,
    @Inject(MAT_DIALOG_DATA) public injectedObject: UpdateSaveObject,
    public servicioTipoUsuario : TipoUsuarioService,
    public servicioEstado : EstadoService
  ) { }

  ngOnInit() {
    console.log(this.injectedObject);
    if(!this.injectedObject.saveBool){
      this.getTipoUsuarioPorId();
    }

    this.getListaEstado();
  }

  getTipoUsuarioPorId() {
    this.servicioTipoUsuario.findById(this.injectedObject.text).subscribe(result=>{
      this.tipoUsuario = result;
    });
  }

  getListaEstado() {
    this.servicioEstado.findAll().subscribe(result=>{
      this.listaEstado =  result;
    });
  }

  abrirSnackBar(mensaje: string, accion: string) {
    this.snackBar.open(mensaje, accion);
  }

  retornarMatDialogConfig(datos : any) : MatDialogConfig<any>{
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = datos;

    return dialogConfig;
  }

  actualizar() {
    let data = {
      title : "Actualizar tipo usuario", 
      body : "¿Esta usted seguro de querer actualizar el tipo " +
      "de usuario con id " + this.tipoUsuario.tipoUsuarioId + "?"
    };
    
    let matDialogRef = this.matDialog.open(
      ConfirmationDialogComponent,
      this.retornarMatDialogConfig(data)
    );

    matDialogRef.afterClosed().subscribe(result=>{
      if(result === true){
      this.servicioTipoUsuario.update(this.tipoUsuario).subscribe(
        data=>{
          this.dialogRef.close(data.mensaje);
        },
        error=>{
          this.abrirSnackBar(error.error.mensaje, 'OK');
        });
      }

    });

  }

  crear() {
    let data = {
      title : "Crear tipo usuario", 
      body : "¿Esta usted seguro de querer crear el tipo " +
      "de usuario con id " + this.tipoUsuario.tipoUsuarioId + "?"
    };
    
    let matDialogRef = this.matDialog.open(
      ConfirmationDialogComponent,
      this.retornarMatDialogConfig(data)
    );

    matDialogRef.afterClosed().subscribe(result=>{
      if(result === true){
      this.servicioTipoUsuario.save(this.tipoUsuario).subscribe(
        data=>{
          this.dialogRef.close(data.mensaje);
        },
        error=>{
          this.abrirSnackBar(error.error.mensaje, 'OK');
        });
      }
      
    });

  }

  cerrar() {
    this.dialogRef.close();
  }

}
