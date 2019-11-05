import { Component, OnInit, Inject } from '@angular/core';
import { TipoTransformador } from 'src/app/shared/domain/tipo-transformador';
import { Estado } from 'src/app/shared/domain/estado';
import { MatDialogRef, MatSnackBar, MatDialog, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material';
import { UpdateSaveObject } from 'src/app/shared/domain/update-save-object';
import { TipoTransformadorService } from 'src/app/shared/services/tipo-transformador.service';
import { EstadoService } from 'src/app/shared/services/estado.service';
import { ConfirmationDialogComponent } from '../../confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-tipo-transformador-update-save-dialog',
  templateUrl: './tipo-transformador-update-save-dialog.component.html',
  styleUrls: ['./tipo-transformador-update-save-dialog.component.scss']
})
export class TipoTransformadorUpdateSaveDialogComponent implements OnInit {

  tipoTransformador : TipoTransformador = new TipoTransformador(null,"");
  
  listaEstado : Estado[];

  constructor(
    private dialogRef: MatDialogRef<TipoTransformadorUpdateSaveDialogComponent>,
    private snackBar : MatSnackBar,
    private matDialog : MatDialog,
    @Inject(MAT_DIALOG_DATA) public injectedObject: UpdateSaveObject,
    public servicioTipoTransformador : TipoTransformadorService,
    public servicioEstado : EstadoService
  ) { }

  ngOnInit() {
    console.log(this.injectedObject);
    if(!this.injectedObject.saveBool){
      this.getTipoTransformadorPorId();
    }

    this.getListaEstado();
  }

  getTipoTransformadorPorId() {
    this.servicioTipoTransformador.findById(this.injectedObject.text).subscribe(result=>{
      this.tipoTransformador = result;
    });
  }

  getListaEstado() {
    this.servicioEstado.findAll().subscribe(result=>{
      this.listaEstado =  result;
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
    if(this.tipoTransformador.tipoTransformadorId==null || this.tipoTransformador.tipoTransformadorId<=0){
      return this.snackBar.open('Revise el Id por favor', 'ERROR', {
        duration: 3000,
      });
    }
    if(this.tipoTransformador.nombreTipoTransformador==null || this.tipoTransformador.nombreTipoTransformador==""){
      return this.snackBar.open('Revise el nombre por favor', 'ERROR', {
        duration: 3000,
      });
    }
    if(this.tipoTransformador.idEstado_Estado==null ){
      return this.snackBar.open('Revise el estado por favor', 'ERROR', {
        duration: 3000,
      });
    }
    let data = {
      title : "Actualizar tipo transformador", 
      body : "¿Esta usted seguro de querer actualizar el tipo " +
      "de transformador con id " + this.tipoTransformador.tipoTransformadorId + "?"
    };
    
    let matDialogRef = this.matDialog.open(
      ConfirmationDialogComponent,
      this.retornarMatDialogConfig(data)
    );

    matDialogRef.afterClosed().subscribe(result=>{
      if(result === true){
      this.servicioTipoTransformador.update(this.tipoTransformador).subscribe(
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
    if(this.tipoTransformador.tipoTransformadorId==null || this.tipoTransformador.tipoTransformadorId<=0){
      return this.snackBar.open('Revise el Id por favor', 'ERROR', {
        duration: 3000,
      });
    }
    if(this.tipoTransformador.nombreTipoTransformador==null || this.tipoTransformador.nombreTipoTransformador==""){
      return this.snackBar.open('Revise el nombre por favor', 'ERROR', {
        duration: 3000,
      });
    }
    if(this.tipoTransformador.idEstado_Estado==null ){
      return this.snackBar.open('Revise el estado por favor', 'ERROR', {
        duration: 3000,
      });
    }
    let data = {
      title : "Crear tipo transformador", 
      body : "¿Esta usted seguro de querer crear el tipo " +
      "de transformador con id " + this.tipoTransformador.tipoTransformadorId + "?"
    };
    
    let matDialogRef = this.matDialog.open(
      ConfirmationDialogComponent,
      this.retornarMatDialogConfig(data)
    );

    matDialogRef.afterClosed().subscribe(result=>{
      if(result === true){
      this.servicioTipoTransformador.save(this.tipoTransformador).subscribe(
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
