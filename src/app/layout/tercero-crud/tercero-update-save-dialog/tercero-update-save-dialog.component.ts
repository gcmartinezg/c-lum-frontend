import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MatSnackBar, MAT_DIALOG_DATA, MatPaginator, MatSort, MatDialog, MatDialogConfig } from '@angular/material';
import { UpdateSaveObject } from 'src/app/shared/domain/update-save-object';
import { TerceroService } from 'src/app/shared/services/tercero.service';
import { TipoDocumentoService } from 'src/app/shared/services/tipo-documento.service';
import { Tercero } from 'src/app/shared/domain/tercero';
import { TipoDocumento } from 'src/app/shared/domain/tipo-documento';
import { Estado } from 'src/app/shared/domain/estado';
import { EstadoService } from 'src/app/shared/services/estado.service';
import { ConfirmationDialogComponent } from '../../confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-tercero-update-save-dialog',
  templateUrl: './tercero-update-save-dialog.component.html',
  styleUrls: ['./tercero-update-save-dialog.component.scss']
})
export class TerceroUpdateSaveDialogComponent implements OnInit {

  tercero : Tercero = new Tercero(null,null,"","","",null,null);
  
  listaTipoDocumento : TipoDocumento[];
  listaEstado : Estado[];

  constructor(
    private dialogRef: MatDialogRef<TerceroUpdateSaveDialogComponent>,
    private snackBar : MatSnackBar,
    private matDialog : MatDialog,
    @Inject(MAT_DIALOG_DATA) public injectedObject: UpdateSaveObject,
    public servicioTercero : TerceroService,
    public servicioTipoDoc : TipoDocumentoService,
    public servicioEstado : EstadoService
  ) { }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort : MatSort;

  ngOnInit() {
    console.log(this.injectedObject);
    if(!this.injectedObject.saveBool){
      this.getTerceroPorId();
    }

    this.getListaTipoDocumento();
    this.getListaEstado();
  }

  getTerceroPorId() {
    this.servicioTercero.findById(this.injectedObject.text).subscribe(result=>{
      this.tercero = result;
    });
  }

  getListaTipoDocumento() {
    this.servicioTipoDoc.findAll().subscribe(result=>{
      this.listaTipoDocumento = result;
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
    if(this.tercero.terceroId==null || this.tercero.terceroId<=0){
      return this.snackBar.open('Revise el Id por favor', 'ERROR', {
        duration: 3000,
      });
    }
    if(this.tercero.tipoDocumentoId_TipoDocumento==null ){
      return this.snackBar.open('Revise el Tipo Documento por favor', 'ERROR', {
        duration: 3000,
      });
    }
    if(this.tercero.numeroDocumento==null || this.tercero.numeroDocumento<=0){
      return this.snackBar.open('Revise el numero de documento por favor', 'ERROR', {
        duration: 3000,
      });
    }
    if(this.tercero.telefono==null || this.tercero.telefono<=0){
      return this.snackBar.open('Revise el telefono por favor', 'ERROR', {
        duration: 3000,
      });
    }
    if(this.tercero.nombreTercero==null || this.tercero.nombreTercero==""){
      return this.snackBar.open('Revise el nombre por favor', 'ERROR', {
        duration: 3000,
      });
    }
    if(this.tercero.idEstado_Estado==null ){
      return this.snackBar.open('Revise el estado por favor', 'ERROR', {
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
      title : "Actualizar tercero", 
      body : "¿Esta usted seguro de querer actualizar el tercero " +
      "con id " + this.tercero.terceroId + "?"
    };
    
    let matDialogRef = this.matDialog.open(
      ConfirmationDialogComponent,
      this.retornarMatDialogConfig(data)
    );

    matDialogRef.afterClosed().subscribe(result=>{
      if(result === true){
      this.servicioTercero.update(this.tercero).subscribe(
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
    if(this.tercero.terceroId==null || this.tercero.terceroId<=0){
      return this.snackBar.open('Revise el Id por favor', 'ERROR', {
        duration: 3000,
      });
    }
    if(this.tercero.tipoDocumentoId_TipoDocumento==null ){
      return this.snackBar.open('Revise el Tipo Documento por favor', 'ERROR', {
        duration: 3000,
      });
    }
    if(this.tercero.numeroDocumento==null || this.tercero.numeroDocumento<=0){
      return this.snackBar.open('Revise el numero de documento por favor', 'ERROR', {
        duration: 3000,
      });
    }
    if(this.tercero.telefono==null || this.tercero.telefono<=0){
      return this.snackBar.open('Revise el telefono por favor', 'ERROR', {
        duration: 3000,
      });
    }
    if(this.tercero.nombreTercero==null || this.tercero.nombreTercero==""){
      return this.snackBar.open('Revise el nombre por favor', 'ERROR', {
        duration: 3000,
      });
    }
    if(this.tercero.idEstado_Estado==null ){
      return this.snackBar.open('Revise el estado por favor', 'ERROR', {
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
      title : "Crear tercero", 
      body : "¿Esta usted seguro de querer crear el tercero " +
      "con id " + this.tercero.terceroId + "?"
    };
    
    let matDialogRef = this.matDialog.open(
      ConfirmationDialogComponent,
      this.retornarMatDialogConfig(data)
    );

    matDialogRef.afterClosed().subscribe(result=>{
      if(result === true){
      this.servicioTercero.save(this.tercero).subscribe(
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
