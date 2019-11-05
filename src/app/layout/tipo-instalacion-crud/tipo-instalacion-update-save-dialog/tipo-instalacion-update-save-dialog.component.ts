import { Component, OnInit, Inject } from '@angular/core';
import { TipoInstalacion } from 'src/app/shared/domain/tipo-instalacion';
import { Estado } from 'src/app/shared/domain/estado';
import { MatDialogRef, MatSnackBar, MatDialog, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material';
import { UpdateSaveObject } from 'src/app/shared/domain/update-save-object';
import { TipoInstalacionService } from 'src/app/shared/services/tipo-instalacion.service';
import { EstadoService } from 'src/app/shared/services/estado.service';
import { ConfirmationDialogComponent } from '../../confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-tipo-instalacion-update-save-dialog',
  templateUrl: './tipo-instalacion-update-save-dialog.component.html',
  styleUrls: ['./tipo-instalacion-update-save-dialog.component.scss']
})
export class TipoInstalacionUpdateSaveDialogComponent implements OnInit {

  tipoInstalacion : TipoInstalacion = new TipoInstalacion(null,"");
  
  listaEstado : Estado[];

  constructor(
    private dialogRef: MatDialogRef<TipoInstalacionUpdateSaveDialogComponent>,
    private snackBar : MatSnackBar,
    private matDialog : MatDialog,
    @Inject(MAT_DIALOG_DATA) public injectedObject: UpdateSaveObject,
    public tipoInstalacionService: TipoInstalacionService,
    public servicioEstado : EstadoService
  ) { }

  ngOnInit() {
    console.log(this.injectedObject);
    if(!this.injectedObject.saveBool){
      this.getTipoInstalacionPorId();
    }

    this.getListaEstado();
  }

  getTipoInstalacionPorId(){
    this.tipoInstalacionService.findById(this.injectedObject.text).subscribe(res=>{
      this.tipoInstalacion = res;
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
    if(this.tipoInstalacion.tipoInstalacionId==null || this.tipoInstalacion.tipoInstalacionId<=0){
      return this.snackBar.open('Revise el Id por favor', 'ERROR', {
        duration: 3000,
      });
    }
    if(this.tipoInstalacion.nombreTipoInstalacion==null || this.tipoInstalacion.nombreTipoInstalacion==""){
      return this.snackBar.open('Revise el nombre por favor', 'ERROR', {
        duration: 3000,
      });
    }
    if(this.tipoInstalacion.idEstado_Estado==null ){
      return this.snackBar.open('Revise el estado por favor', 'ERROR', {
        duration: 3000,
      });
    }
    let data = {
      title : "Actualizar tipo transformador", 
      body : "¿Esta usted seguro de querer actualizar el tipo " +
      "de transformador con id " + this.tipoInstalacion.tipoInstalacionId + "?"
    };
    
    let matDialogRef = this.matDialog.open(
      ConfirmationDialogComponent,
      this.retornarMatDialogConfig(data)
    );

    matDialogRef.afterClosed().subscribe(result=>{
      if(result === true){
      this.tipoInstalacionService.update(this.tipoInstalacion).subscribe(
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
    if(this.tipoInstalacion.tipoInstalacionId==null || this.tipoInstalacion.tipoInstalacionId<=0){
      return this.snackBar.open('Revise el Id por favor', 'ERROR', {
        duration: 3000,
      });
    }
    if(this.tipoInstalacion.nombreTipoInstalacion==null || this.tipoInstalacion.nombreTipoInstalacion==""){
      return this.snackBar.open('Revise el nombre por favor', 'ERROR', {
        duration: 3000,
      });
    }
    if(this.tipoInstalacion.idEstado_Estado==null ){
      return this.snackBar.open('Revise el estado por favor', 'ERROR', {
        duration: 3000,
      });
    }
    let data = {
      title : "Crear tipo transformador", 
      body : "¿Esta usted seguro de querer crear el tipo " +
      "de transformador con id " + this.tipoInstalacion.tipoInstalacionId + "?"
    };
    
    let matDialogRef = this.matDialog.open(
      ConfirmationDialogComponent,
      this.retornarMatDialogConfig(data)
    );

    matDialogRef.afterClosed().subscribe(result=>{
      if(result === true){
      this.tipoInstalacionService.save(this.tipoInstalacion).subscribe(
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
