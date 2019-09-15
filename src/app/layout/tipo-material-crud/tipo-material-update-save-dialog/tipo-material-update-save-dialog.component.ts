import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { TipoMaterial } from 'src/app/shared/domain/tipo-material';
import { Estado } from 'src/app/shared/domain/estado';
import { MatDialogRef, MatSnackBar, MAT_DIALOG_DATA, MatPaginator, MatSort, MatDialogConfig, MatDialog } from '@angular/material';
import { UpdateSaveObject } from 'src/app/shared/domain/update-save-object';
import { TipoMaterialService } from 'src/app/shared/services/tipo-material.service';
import { EstadoService } from 'src/app/shared/services/estado.service';
import { ConfirmationDialogComponent } from '../../confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-tipo-material-update-save-dialog',
  templateUrl: './tipo-material-update-save-dialog.component.html',
  styleUrls: ['./tipo-material-update-save-dialog.component.scss']
})
export class TipoMaterialUpdateSaveDialogComponent implements OnInit {

  tipoMaterial : TipoMaterial = new TipoMaterial(null,"");
  
  listaEstado : Estado[];

  constructor(
    private dialogRef: MatDialogRef<TipoMaterialUpdateSaveDialogComponent>,
    private snackBar : MatSnackBar,
    private matDialog : MatDialog,
    @Inject(MAT_DIALOG_DATA) public injectedObject: UpdateSaveObject,
    public servicioTipoMaterial : TipoMaterialService,
    public servicioEstado : EstadoService
  ) { }

  ngOnInit() {
    console.log(this.injectedObject);
    if(!this.injectedObject.saveBool){
      this.getTipoMaterialPorId();
    }

    this.getListaEstado();
  }

  getTipoMaterialPorId() {
    this.servicioTipoMaterial.findById(this.injectedObject.text).subscribe(result=>{
      this.tipoMaterial = result;
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
      title : "Actualizar tipo material", 
      body : "¿Esta usted seguro de querer actualizar el tipo " +
      "de material con id " + this.tipoMaterial.tipoMaterialId + "?"
    };
    
    let matDialogRef = this.matDialog.open(
      ConfirmationDialogComponent,
      this.retornarMatDialogConfig(data)
    );

    matDialogRef.afterClosed().subscribe(result=>{
      if(result === true){
      this.servicioTipoMaterial.update(this.tipoMaterial).subscribe(
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
      title : "Crear tipo material", 
      body : "¿Esta usted seguro de querer crear el tipo " +
      "de material con id " + this.tipoMaterial.tipoMaterialId + "?"
    };
    
    let matDialogRef = this.matDialog.open(
      ConfirmationDialogComponent,
      this.retornarMatDialogConfig(data)
    );

    matDialogRef.afterClosed().subscribe(result=>{
      if(result === true){
      this.servicioTipoMaterial.save(this.tipoMaterial).subscribe(
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
