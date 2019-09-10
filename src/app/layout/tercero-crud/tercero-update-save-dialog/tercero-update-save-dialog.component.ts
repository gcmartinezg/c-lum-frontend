import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MatSnackBar, MAT_DIALOG_DATA, MatPaginator, MatSort } from '@angular/material';
import { UpdateSaveObject } from 'src/app/shared/domain/update-save-object';
import { TerceroService } from 'src/app/shared/services/tercero.service';
import { TipoDocumentoService } from 'src/app/shared/services/tipo-documento.service';
import { Tercero } from 'src/app/shared/domain/tercero';
import { TipoDocumento } from 'src/app/shared/domain/tipo-documento';
import { Estado } from 'src/app/shared/domain/estado';
import { EstadoService } from 'src/app/shared/services/estado.service';

@Component({
  selector: 'app-tercero-update-save-dialog',
  templateUrl: './tercero-update-save-dialog.component.html',
  styleUrls: ['./tercero-update-save-dialog.component.scss']
})
export class TerceroUpdateSaveDialogComponent implements OnInit {

  tercero : Tercero = new Tercero(null,1,'','','',null);
  
  listaTipoDocumento : TipoDocumento[];
  listaEstado : Estado[];

  constructor(
    private dialogRef: MatDialogRef<TerceroUpdateSaveDialogComponent>,
    private snackBar : MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public injectedObject: UpdateSaveObject,
    public servicioTercero : TerceroService,
    public servicioTipoDoc : TipoDocumentoService,
    public servicioEstado : EstadoService
  ) { }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort : MatSort;

  ngOnInit() {
    console.log(this.injectedObject);
    if(!this.injectedObject.saveBool && this.injectedObject.text.length > 0){
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
    this.listaEstado = this.servicioEstado.findAll();
  }

  abrirSnackBar(mensaje: string, accion: string) {
    this.snackBar.open(mensaje, accion);
  }

  actualizar() {
    this.servicioTercero.update(this.tercero).subscribe(
      data=>{
        this.dialogRef.close(data.mensaje);
      },
      error=>{
        this.abrirSnackBar(error.error.mensaje, 'OK');
      });
  }

  crear() {
    this.servicioTercero.save(this.tercero).subscribe(
      data=>{
        this.dialogRef.close(data.mensaje);
      },
      error=>{
        this.abrirSnackBar(error.error.mensaje, 'OK');
      });
  }

  cerrar() {
    this.dialogRef.close();
  }

}
