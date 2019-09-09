import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MatSnackBar, MAT_DIALOG_DATA, MatPaginator, MatSort } from '@angular/material';
import { UpdateSaveObject } from 'src/app/shared/domain/update-save-object';
import { TerceroService } from 'src/app/shared/services/tercero.service';
import { TipoDocumentoService } from 'src/app/shared/services/tipo-documento.service';

@Component({
  selector: 'app-tercero-update-save-dialog',
  templateUrl: './tercero-update-save-dialog.component.html',
  styleUrls: ['./tercero-update-save-dialog.component.scss']
})
export class TerceroUpdateSaveDialogComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<TerceroUpdateSaveDialogComponent>,
    private snackBar : MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public injectedObject: UpdateSaveObject,
    public servicioTercero : TerceroService,
    public servicioTipoDoc : TipoDocumentoService 
  ) { }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort : MatSort;

  ngOnInit() {
    if(!this.injectedObject.saveBool && this.injectedObject.text.length > 0){
      this.getTerceroPorId();
    }

    this.getListaTipoDocumento();
  }

  getTerceroPorId() {

  }

  getListaTipoDocumento() {

  }

  close() {
    this.dialogRef.close();
  }

}
