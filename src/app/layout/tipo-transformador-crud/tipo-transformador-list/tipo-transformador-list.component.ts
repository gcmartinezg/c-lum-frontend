import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog, MatSnackBar, MatDialogConfig } from '@angular/material';
import { TipoTransformador } from 'src/app/shared/domain/tipo-transformador';
import { TipoTransformadorService } from 'src/app/shared/services/tipo-transformador.service';
import { TipoTransformadorUpdateSaveDialogComponent } from '../tipo-transformador-update-save-dialog/tipo-transformador-update-save-dialog.component';
import { ConfirmationDialogComponent } from '../../confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-tipo-transformador-list',
  templateUrl: './tipo-transformador-list.component.html',
  styleUrls: ['./tipo-transformador-list.component.scss']
})
export class TipoTransformadorListComponent implements OnInit {

  displayedColumns: string[] = [
    'tipoTransformadorId',
    'nombreTipoTransformador',
    'estado',
    'opciones'
  ];

  public dataSource:MatTableDataSource<TipoTransformador>;
  @ViewChild(MatPaginator) paginator: MatPaginator; 
  @ViewChild(MatSort) sort:MatSort;

  constructor(
    public servicioTipoTransformador: TipoTransformadorService,
    public matDialog: MatDialog,
    public snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.getTipoTransformadores();
  }

  getTipoTransformadores(){
    this.servicioTipoTransformador.findAll().subscribe(res=>{
      console.log(res);
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
    
  }

  abrirSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000,
    });
  }

  aplicarFiltro(filterValue:string){
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  retornarMatDialogConfig(datos : any) : MatDialogConfig<any>{
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = datos;

    return dialogConfig;
  }

  crear(){
    let datos = {saveBool : true, text : 'tipo transformador'};

    let matDialogRef = this.matDialog.open(
      TipoTransformadorUpdateSaveDialogComponent, 
      this.retornarMatDialogConfig(datos)
    );

    matDialogRef.afterClosed().subscribe(result=>{
      if(result != null){
        this.abrirSnackBar(result, 'OK');
        this.getTipoTransformadores();
      }
    });

  }

  actualizar(tipoTransformadorId: string){
    let data = {saveBool : false, text : ""+tipoTransformadorId};

    let matDialogRef = this.matDialog.open(
      TipoTransformadorUpdateSaveDialogComponent, 
      this.retornarMatDialogConfig(data)
    );

    matDialogRef.afterClosed().subscribe(result=>{
      if(result != null){
        this.abrirSnackBar(result, 'OK');
        this.getTipoTransformadores();
      }
    });

  }

  /**
   * 
   * @param tipoTransformadorId 
   * @deprecated usar desactivar(id) en su lugar
   */

  eliminar(tipoTransformadorId: string){
    this.servicioTipoTransformador.delete(""+tipoTransformadorId).subscribe(res=>{
      this.abrirSnackBar(res.mensaje, 'Exito');
      this.getTipoTransformadores();
    },error=>{
      this.abrirSnackBar(error.error.mensaje, 'Error');
    });
    
  }

  esInactivo(tipoTransformador: TipoTransformador) : boolean{
    return tipoTransformador.idEstado_Estado == 2;
  }

  desactivar(tipoTransformador : TipoTransformador){
    let data = {
      title : "Desactivar tipo de transformador", 
      body : "¿Esta usted seguro de querer desactivar el tipo " +
      "de transformador con id " + tipoTransformador.tipoTransformadorId + "?"
    };
    
    let matDialogRef = this.matDialog.open(
      ConfirmationDialogComponent,
      this.retornarMatDialogConfig(data)
    );

    matDialogRef.afterClosed().subscribe(result=>{
      if(result == true){
        this.servicioTipoTransformador.deactivate(tipoTransformador).subscribe(
          data=>{
            this.abrirSnackBar(data.mensaje, 'OK');
            this.getTipoTransformadores();
          },
          error=>{
            this.abrirSnackBar(error.error.mensaje, 'OK');
          }
        );}

      });

  }

  activar(tipoTransformador : TipoTransformador){
    let data = {
      title : "Activar tipo de transformador", 
      body : "¿Esta usted seguro de querer activar el tipo " +
      "de transformador con id " + tipoTransformador.tipoTransformadorId + "?"
    };
    
    let matDialogRef = this.matDialog.open(
      ConfirmationDialogComponent,
      this.retornarMatDialogConfig(data)
    );

    matDialogRef.afterClosed().subscribe(result=>{
      if(result == true){
        this.servicioTipoTransformador.activate(tipoTransformador).subscribe(
          data=>{
            this.abrirSnackBar(data.mensaje, 'OK');
            this.getTipoTransformadores();
          },
          error=>{
            this.abrirSnackBar(error.error.mensaje, 'OK');
          }
        );}

      });

  }

}
