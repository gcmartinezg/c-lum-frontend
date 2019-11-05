import { Component, OnInit, Inject } from '@angular/core';
import { TipoDocumento } from 'src/app/shared/domain/tipo-documento';
import { Estado } from 'src/app/shared/domain/estado';
import { MatDialogRef, MatSnackBar, MatDialog, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material';
import { UpdateSaveObject } from 'src/app/shared/domain/update-save-object';
import { TipoDocumentoService } from 'src/app/shared/services/tipo-documento.service';
import { EstadoService } from 'src/app/shared/services/estado.service';
import { ConfirmationDialogComponent } from '../../confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-tipo-documento-update-save-dialog',
  templateUrl: './tipo-documento-update-save-dialog.component.html',
  styleUrls: ['./tipo-documento-update-save-dialog.component.scss']
})
export class TipoDocumentoUpdateSaveDialogComponent implements OnInit {

  tipoDocumento : TipoDocumento = new TipoDocumento(null,"");
  
  listaEstado : Estado[];

  constructor(
    private dialogRef: MatDialogRef<TipoDocumentoUpdateSaveDialogComponent>,
    private snackBar : MatSnackBar,
    private matDialog : MatDialog,
    @Inject(MAT_DIALOG_DATA) public injectedObject: UpdateSaveObject,
    public tipoDocumentoService: TipoDocumentoService,
    public estadoService : EstadoService
  ) { }

  ngOnInit() {
    console.log(this.injectedObject);
    if(!this.injectedObject.saveBool){
      this.getTipoDocumentoPorId();
    }

    this.getListaEstado();
  }

  getTipoDocumentoPorId() {
    this.tipoDocumentoService.findById(this.injectedObject.text).subscribe(result=>{
      this.tipoDocumento = result;
    });
  }

  getListaEstado() {
    this.estadoService.findAll().subscribe(result=>{
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
    if(this.tipoDocumento.tipoDocumentoId==null || this.tipoDocumento.tipoDocumentoId<=0){
      return this.snackBar.open('Revise el Id por favor', 'ERROR', {
        duration: 3000,
      });
    }
    if(this.tipoDocumento.nombreTipoDocumento==null || this.tipoDocumento.nombreTipoDocumento==""){
      return this.snackBar.open('Revise el nombre por favor', 'ERROR', {
        duration: 3000,
      });
    }
    if(this.tipoDocumento.idEstado_Estado==null ){
      return this.snackBar.open('Revise el estado por favor', 'ERROR', {
        duration: 3000,
      });
    }
    let data = {
      title : "Actualizar tipo transformador", 
      body : "¿Esta usted seguro de querer actualizar el tipo " +
      "de documento con id " + this.tipoDocumento.tipoDocumentoId + "?"
    };
    
    let matDialogRef = this.matDialog.open(
      ConfirmationDialogComponent,
      this.retornarMatDialogConfig(data)
    );

    matDialogRef.afterClosed().subscribe(result=>{
      if(result === true){
      this.tipoDocumentoService.update(this.tipoDocumento).subscribe(
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
    if(this.tipoDocumento.tipoDocumentoId==null || this.tipoDocumento.tipoDocumentoId<=0){
      return this.snackBar.open('Revise el Id por favor', 'ERROR', {
        duration: 3000,
      });
    }
    if(this.tipoDocumento.nombreTipoDocumento==null || this.tipoDocumento.nombreTipoDocumento==""){
      return this.snackBar.open('Revise el nombre por favor', 'ERROR', {
        duration: 3000,
      });
    }
    if(this.tipoDocumento.idEstado_Estado==null ){
      return this.snackBar.open('Revise el estado por favor', 'ERROR', {
        duration: 3000,
      });
    }
    let data = {
      title : "Crear tipo transformador", 
      body : "¿Esta usted seguro de querer crear el tipo " +
      "de documento con id " + this.tipoDocumento.tipoDocumentoId+ "?"
    };
    
    let matDialogRef = this.matDialog.open(
      ConfirmationDialogComponent,
      this.retornarMatDialogConfig(data)
    );

    matDialogRef.afterClosed().subscribe(result=>{
      if(result === true){
      this.tipoDocumentoService.save(this.tipoDocumento).subscribe(
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
