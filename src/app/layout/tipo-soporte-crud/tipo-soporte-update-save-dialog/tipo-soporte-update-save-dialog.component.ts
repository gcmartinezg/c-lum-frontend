import { Component, OnInit, Inject } from '@angular/core';
import { TipoSoporte } from 'src/app/shared/domain/tipo-soporte';
import { Estado } from 'src/app/shared/domain/estado';
import { MatDialogRef, MatSnackBar, MAT_DIALOG_DATA, MatDialog, MatDialogConfig } from '@angular/material';
import { UpdateSaveObject } from 'src/app/shared/domain/update-save-object';
import { TipoSoporteService } from 'src/app/shared/services/tipo-soporte.service';
import { EstadoService } from 'src/app/shared/services/estado.service';
import { ConfirmationDialogComponent } from '../../confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-tipo-soporte-update-save-dialog',
  templateUrl: './tipo-soporte-update-save-dialog.component.html',
  styleUrls: ['./tipo-soporte-update-save-dialog.component.scss']
})
export class TipoSoporteUpdateSaveDialogComponent implements OnInit {

  tipoSoporte : TipoSoporte = new TipoSoporte(null,"");
  
  listaEstado : Estado[];

  constructor(
    private dialogRef: MatDialogRef<TipoSoporteUpdateSaveDialogComponent>,
    private snackBar : MatSnackBar,
    private matDialog : MatDialog,
    @Inject(MAT_DIALOG_DATA) public injectedObject: UpdateSaveObject,
    public servicioTipoSoporte : TipoSoporteService,
    public servicioEstado : EstadoService
  ) { }

  ngOnInit() {
    console.log(this.injectedObject);
    if(!this.injectedObject.saveBool){
      this.getTipoSoportePorId();
    }

    this.getListaEstado();
  }

  getTipoSoportePorId() {
    this.servicioTipoSoporte.findById(this.injectedObject.text).subscribe(result=>{
      this.tipoSoporte = result;
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
    if(this.tipoSoporte.tipoSoporteId==null || this.tipoSoporte.tipoSoporteId<=0){
      return this.snackBar.open('Revise el Id por favor', 'ERROR', {
        duration: 3000,
      });
    }
    if(this.tipoSoporte.nombreTipoSoporte==null || this.tipoSoporte.nombreTipoSoporte==""){
      return this.snackBar.open('Revise el nombre por favor', 'ERROR', {
        duration: 3000,
      });
    }
    if(this.tipoSoporte.idEstado_Estado==null ){
      return this.snackBar.open('Revise el estado por favor', 'ERROR', {
        duration: 3000,
      });
    }
    let data = {
      title : "Actualizar tipo soporte", 
      body : "¿Esta usted seguro de querer actualizar el tipo " +
      "de soporte con id " + this.tipoSoporte.tipoSoporteId + "?"
    };
    
    let matDialogRef = this.matDialog.open(
      ConfirmationDialogComponent,
      this.retornarMatDialogConfig(data)
    );

    matDialogRef.afterClosed().subscribe(result=>{
      if(result === true){
      this.servicioTipoSoporte.update(this.tipoSoporte).subscribe(
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
    if(this.tipoSoporte.tipoSoporteId==null || this.tipoSoporte.tipoSoporteId<=0){
      return this.snackBar.open('Revise el Id por favor', 'ERROR', {
        duration: 3000,
      });
    }
    if(this.tipoSoporte.nombreTipoSoporte==null || this.tipoSoporte.nombreTipoSoporte==""){
      return this.snackBar.open('Revise el nombre por favor', 'ERROR', {
        duration: 3000,
      });
    }
    if(this.tipoSoporte.idEstado_Estado==null ){
      return this.snackBar.open('Revise el estado por favor', 'ERROR', {
        duration: 3000,
      });
    }
    let data = {
      title : "Crear tipo soporte", 
      body : "¿Esta usted seguro de querer crear el tipo " +
      "de soporte con id " + this.tipoSoporte.tipoSoporteId + "?"
    };
    
    let matDialogRef = this.matDialog.open(
      ConfirmationDialogComponent,
      this.retornarMatDialogConfig(data)
    );

    matDialogRef.afterClosed().subscribe(result=>{
      if(result === true){
      this.servicioTipoSoporte.save(this.tipoSoporte).subscribe(
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
