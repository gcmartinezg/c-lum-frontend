import { Component, OnInit, Inject } from '@angular/core';
import { TipoZona } from 'src/app/shared/domain/tipo-zona';
import { Estado } from 'src/app/shared/domain/estado';
import { MatDialogRef, MatSnackBar, MatDialog, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material';
import { UpdateSaveObject } from 'src/app/shared/domain/update-save-object';
import { TipoZonaService } from 'src/app/shared/services/tipo-zona.service';
import { EstadoService } from 'src/app/shared/services/estado.service';
import { ConfirmationDialogComponent } from '../../confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-tipo-zona-update-save-dialog',
  templateUrl: './tipo-zona-update-save-dialog.component.html',
  styleUrls: ['./tipo-zona-update-save-dialog.component.scss']
})
export class TipoZonaUpdateSaveDialogComponent implements OnInit {

  tipoZona : TipoZona = new TipoZona(null,"");
  
  listaEstado : Estado[];

  constructor(
    private dialogRef: MatDialogRef<TipoZonaUpdateSaveDialogComponent>,
    private snackBar : MatSnackBar,
    private matDialog : MatDialog,
    @Inject(MAT_DIALOG_DATA) public injectedObject: UpdateSaveObject,
    public servicioTipoZona : TipoZonaService,
    public servicioEstado : EstadoService
  ) { }

  ngOnInit() {
    console.log(this.injectedObject);
    if(!this.injectedObject.saveBool){
      this.getTipoZonaPorId();
    }

    this.getListaEstado();
  }

  getTipoZonaPorId() {
    this.servicioTipoZona.findById(this.injectedObject.text).subscribe(result=>{
      this.tipoZona = result;
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
      title : "Actualizar tipo zona", 
      body : "¿Esta usted seguro de querer actualizar el tipo " +
      "de zona con id " + this.tipoZona.tipoZonaId + "?"
    };
    
    let matDialogRef = this.matDialog.open(
      ConfirmationDialogComponent,
      this.retornarMatDialogConfig(data)
    );

    matDialogRef.afterClosed().subscribe(result=>{
      if(result === true){
      this.servicioTipoZona.update(this.tipoZona).subscribe(
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
      title : "Crear tipo zona", 
      body : "¿Esta usted seguro de querer crear el tipo " +
      "de zona con id " + this.tipoZona.tipoZonaId + "?"
    };
    
    let matDialogRef = this.matDialog.open(
      ConfirmationDialogComponent,
      this.retornarMatDialogConfig(data)
    );

    matDialogRef.afterClosed().subscribe(result=>{
      if(result === true){
      this.servicioTipoZona.save(this.tipoZona).subscribe(
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
