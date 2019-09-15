import { Component, OnInit, Inject } from '@angular/core';
import { TipoSoporte } from 'src/app/shared/domain/tipo-soporte';
import { Estado } from 'src/app/shared/domain/estado';
import { MatDialogRef, MatSnackBar, MAT_DIALOG_DATA } from '@angular/material';
import { UpdateSaveObject } from 'src/app/shared/domain/update-save-object';
import { TipoSoporteService } from 'src/app/shared/services/tipo-soporte.service';
import { EstadoService } from 'src/app/shared/services/estado.service';

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
    this.snackBar.open(mensaje, accion);
  }

  actualizar() {
    this.servicioTipoSoporte.update(this.tipoSoporte).subscribe(
      data=>{
        this.dialogRef.close(data.mensaje);
      },
      error=>{
        this.abrirSnackBar(error.error.mensaje, 'OK');
      });
  }

  crear() {
    this.servicioTipoSoporte.save(this.tipoSoporte).subscribe(
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
