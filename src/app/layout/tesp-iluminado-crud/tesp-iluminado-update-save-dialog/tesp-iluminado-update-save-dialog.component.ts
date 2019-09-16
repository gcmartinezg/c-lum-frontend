import { Component, OnInit, Inject } from '@angular/core';
import { TipoEspacioIluminado } from 'src/app/shared/domain/tipo-espacio-iluminado';
import { Estado } from 'src/app/shared/domain/estado';
import { 
  MatDialogRef, 
  MatSnackBar,
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogConfig
} from '@angular/material';
import { UpdateSaveObject } from 'src/app/shared/domain/update-save-object';
import { TipoEspacioIluminadoService } from 'src/app/shared/services/tipo-espacio-iluminado.service';
import { EstadoService } from 'src/app/shared/services/estado.service';
import { ConfirmationDialogComponent } from '../../confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-tesp-iluminado-update-save-dialog',
  templateUrl: './tesp-iluminado-update-save-dialog.component.html',
  styleUrls: ['./tesp-iluminado-update-save-dialog.component.scss']
})
export class TespIluminadoUpdateSaveDialogComponent implements OnInit {

  tipoEspacioIluminado : TipoEspacioIluminado = new TipoEspacioIluminado(null,"");
  
  listaEstado : Estado[];

  constructor(
    private dialogRef: MatDialogRef<TespIluminadoUpdateSaveDialogComponent>,
    private snackBar : MatSnackBar,
    private matDialog : MatDialog,
    @Inject(MAT_DIALOG_DATA) public injectedObject: UpdateSaveObject,
    public tipoEspacioIluminadoService: TipoEspacioIluminadoService,
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
    this.tipoEspacioIluminadoService.findById(this.injectedObject.text).subscribe(result=>{
      this.tipoEspacioIluminado = result;
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
      title : "Actualizar tipo transformador", 
      body : "¿Esta usted seguro de querer actualizar el tipo " +
      "de transformador con id " + this.tipoEspacioIluminado.tipoEspacioIluminadoId + "?"
    };
    
    let matDialogRef = this.matDialog.open(
      ConfirmationDialogComponent,
      this.retornarMatDialogConfig(data)
    );

    matDialogRef.afterClosed().subscribe(result=>{
      if(result === true){
      this.tipoEspacioIluminadoService.update(this.tipoEspacioIluminado).subscribe(
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
      title : "Crear tipo transformador", 
      body : "¿Esta usted seguro de querer crear el tipo " +
      "de transformador con id " + this.tipoEspacioIluminado.tipoEspacioIluminadoId + "?"
    };
    
    let matDialogRef = this.matDialog.open(
      ConfirmationDialogComponent,
      this.retornarMatDialogConfig(data)
    );

    matDialogRef.afterClosed().subscribe(result=>{
      if(result === true){
      this.tipoEspacioIluminadoService.save(this.tipoEspacioIluminado).subscribe(
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
