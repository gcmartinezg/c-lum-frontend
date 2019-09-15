import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { TipoBalasto } from 'src/app/shared/domain/tipo-balasto';
import { Estado } from 'src/app/shared/domain/estado';
import { MatDialogRef, MatSnackBar, MAT_DIALOG_DATA, MatPaginator, MatSort } from '@angular/material';
import { UpdateSaveObject } from 'src/app/shared/domain/update-save-object';
import { TipoBalastroService } from 'src/app/shared/services/tipo-balastro.service';
import { EstadoService } from 'src/app/shared/services/estado.service';

@Component({
  selector: 'app-tipo-balasto-update-save-dialog',
  templateUrl: './tipo-balasto-update-save-dialog.component.html',
  styleUrls: ['./tipo-balasto-update-save-dialog.component.scss']
})
export class TipoBalastoUpdateSaveDialogComponent implements OnInit {

  tipoBalasto : TipoBalasto = new TipoBalasto(null, '');
  listaEstado : Estado[];

  constructor(
    private dialogRef : MatDialogRef<TipoBalastoUpdateSaveDialogComponent>,
    private snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public injectedObject : UpdateSaveObject,
    public tipoBalastoService: TipoBalastroService,
    public estadoService: EstadoService
  ) { }

  ngOnInit() {
    console.log(this.injectedObject.saveBool);
    if(!this.injectedObject.saveBool ){
      this.getTipoBalastoPorId();
    }
    this.getListaEstado();
    console.log(this.injectedObject.text);
  }

  getTipoBalastoPorId(){
    this.tipoBalastoService.findById(this.injectedObject.text).subscribe(res=>{
      this.tipoBalasto = res;
    });
  }

  getListaEstado(){
    this.estadoService.findAll().subscribe(res=>{
      this.listaEstado = res;
      console.log(this.listaEstado);
    });
  }

  abrirSnackBar(mensaje: string, accion: string) {
    this.snackBar.open(mensaje, accion);
  }

  actualizar(){
    this.tipoBalastoService.update(this.tipoBalasto).subscribe(
      resolve=>{
        this.dialogRef.close(resolve.mensaje);
      }, reject=>{
        this.abrirSnackBar(reject.error.mensaje, 'Ok');
      }
    )
  }

  crear(){
    this.tipoBalastoService.save(this.tipoBalasto).subscribe(
      resolve=>{
        this.dialogRef.close(resolve.mensaje);
      }, reject=>{
        this.abrirSnackBar(reject.error.mensaje, 'Ok');
      }
    )
  }


  cerrar() {
    this.dialogRef.close();
  }

}
