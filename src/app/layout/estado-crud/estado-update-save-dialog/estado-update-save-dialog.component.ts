import { Component, OnInit, Inject } from '@angular/core';
import { Estado } from 'src/app/shared/domain/estado';
import { MatDialogRef, MatSnackBar, MatDialog, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material';
import { UpdateSaveObject } from 'src/app/shared/domain/update-save-object';
import { EstadoService } from 'src/app/shared/services/estado.service';
import { ConfirmationDialogComponent } from '../../confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-estado-update-save-dialog',
  templateUrl: './estado-update-save-dialog.component.html',
  styleUrls: ['./estado-update-save-dialog.component.scss']
})
export class EstadoUpdateSaveDialogComponent implements OnInit {

  estado : Estado = new Estado(null,"");
  
  constructor(
    private dialogRef: MatDialogRef<EstadoUpdateSaveDialogComponent>,
    private snackBar : MatSnackBar,
    private matDialog : MatDialog,
    @Inject(MAT_DIALOG_DATA) public injectedObject: UpdateSaveObject,
    public servicioEstado : EstadoService
  ) { }

  ngOnInit() {
    console.log(this.injectedObject);
    if(!this.injectedObject.saveBool){
      this.getEstadoPorId();
    }

  }

  getEstadoPorId() {
    this.servicioEstado.findById(this.injectedObject.text).subscribe(result=>{
      console.log(result);
      this.estado = result;
    });
  }

  abrirSnackBar(mensaje: string, accion: string) {
     this.snackBar.open(mensaje, accion, {
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
    if(this.estado.idEstado==null || this.estado.idEstado<=0){
      return this.snackBar.open('Revise el Id por favor', 'ERROR', {
        duration: 3000,
      });
    }
    if(this.estado.estado==null || this.estado.estado==""){
      return this.snackBar.open('Revise el nombre estado por favor', 'ERROR', {
        duration: 3000,
      });
    }
    let data = {
      title : "Actualizar estado", 
      body : "¿Esta usted seguro de querer actualizar el estado " +
      "con id " + this.estado.idEstado + "?"
    };
    
    let matDialogRef = this.matDialog.open(
      ConfirmationDialogComponent,
      this.retornarMatDialogConfig(data)
    );

    matDialogRef.afterClosed().subscribe(result=>{
      if(result === true){
      this.servicioEstado.update(this.estado).subscribe(
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
    if(this.estado.idEstado==null || this.estado.idEstado<=0){
      return this.snackBar.open('Revise el Id por favor', 'ERROR', {
        duration: 3000,
      });
    }
    if(this.estado.estado==null || this.estado.estado==""){
      return this.snackBar.open('Revise el nombre estado por favor', 'ERROR', {
        duration: 3000,
      });
    }
    let data = {
      title : "Crear estado", 
      body : "¿Esta usted seguro de querer crear el estado " +
      "con id " + this.estado.idEstado + "?"
    };
    
    let matDialogRef = this.matDialog.open(
      ConfirmationDialogComponent,
      this.retornarMatDialogConfig(data)
    );

    matDialogRef.afterClosed().subscribe(result=>{
      if(result === true){
      this.servicioEstado.save(this.estado).subscribe(
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
