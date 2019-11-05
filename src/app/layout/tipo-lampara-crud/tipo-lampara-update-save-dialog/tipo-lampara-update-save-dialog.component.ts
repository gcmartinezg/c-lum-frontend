import { Component, OnInit, Inject } from '@angular/core';
import { TipoLampara } from 'src/app/shared/domain/tipo-lampara';
import { Estado } from 'src/app/shared/domain/estado';
import { MatDialogRef, MatSnackBar, MatDialog, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material';
import { UpdateSaveObject } from 'src/app/shared/domain/update-save-object';
import { TipoLamparaService } from 'src/app/shared/services/tipo-lampara.service';
import { EstadoService } from 'src/app/shared/services/estado.service';
import { ConfirmationDialogComponent } from '../../confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-tipo-lampara-update-save-dialog',
  templateUrl: './tipo-lampara-update-save-dialog.component.html',
  styleUrls: ['./tipo-lampara-update-save-dialog.component.scss']
})
export class TipoLamparaUpdateSaveDialogComponent implements OnInit {

  tipoLampara : TipoLampara = new TipoLampara(null,"");
  
  listaEstado : Estado[];

  constructor(
    private dialogRef: MatDialogRef<TipoLamparaUpdateSaveDialogComponent>,
    private snackBar : MatSnackBar,
    private matDialog : MatDialog,
    @Inject(MAT_DIALOG_DATA) public injectedObject: UpdateSaveObject,
    public tipoLamparaService: TipoLamparaService,
    public servicioEstado : EstadoService
  ) { }

  ngOnInit() {
    console.log(this.injectedObject);
    if(!this.injectedObject.saveBool){
      this.getTipoLamparaPorId();
    }

    this.getListaEstado();
  }

  getTipoLamparaPorId(){
    this.tipoLamparaService.findById(this.injectedObject.text).subscribe(res=>{
      this.tipoLampara = res;
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
    if(this.tipoLampara.tipoLamparaId==null || this.tipoLampara.tipoLamparaId<=0){
      return this.snackBar.open('Revise el Id por favor', 'ERROR', {
        duration: 3000,
      });
    }
    if(this.tipoLampara.nombreTipoLampara==null || this.tipoLampara.nombreTipoLampara==""){
      return this.snackBar.open('Revise el nombre por favor', 'ERROR', {
        duration: 3000,
      });
    }
    if(this.tipoLampara.idEstado_Estado==null ){
      return this.snackBar.open('Revise el estado por favor', 'ERROR', {
        duration: 3000,
      });
    }
    let data = {
      title : "Actualizar tipo transformador", 
      body : "¿Esta usted seguro de querer actualizar el tipo " +
      "de transformador con id " + this.tipoLampara.tipoLamparaId + "?"
    };
    
    let matDialogRef = this.matDialog.open(
      ConfirmationDialogComponent,
      this.retornarMatDialogConfig(data)
    );

    matDialogRef.afterClosed().subscribe(result=>{
      if(result === true){
      this.tipoLamparaService.update(this.tipoLampara).subscribe(
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
    if(this.tipoLampara.tipoLamparaId==null || this.tipoLampara.tipoLamparaId<=0){
      return this.snackBar.open('Revise el Id por favor', 'ERROR', {
        duration: 3000,
      });
    }
    if(this.tipoLampara.nombreTipoLampara==null || this.tipoLampara.nombreTipoLampara==""){
      return this.snackBar.open('Revise el nombre por favor', 'ERROR', {
        duration: 3000,
      });
    }
    if(this.tipoLampara.idEstado_Estado==null ){
      return this.snackBar.open('Revise el estado por favor', 'ERROR', {
        duration: 3000,
      });
    }
    let data = {
      title : "Crear tipo transformador", 
      body : "¿Esta usted seguro de querer crear el tipo " +
      "de transformador con id " + this.tipoLampara.tipoLamparaId + "?"
    };
    
    let matDialogRef = this.matDialog.open(
      ConfirmationDialogComponent,
      this.retornarMatDialogConfig(data)
    );

    matDialogRef.afterClosed().subscribe(result=>{
      if(result === true){
      this.tipoLamparaService.save(this.tipoLampara).subscribe(
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
