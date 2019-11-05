import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog, MatSnackBar, MatDialogConfig } from '@angular/material';
import { TipoInstalacion } from 'src/app/shared/domain/tipo-instalacion';
import { TipoInstalacionService } from 'src/app/shared/services/tipo-instalacion.service';
import { TipoInstalacionUpdateSaveDialogComponent } from '../tipo-instalacion-update-save-dialog/tipo-instalacion-update-save-dialog.component';
import { ConfirmationDialogComponent } from '../../confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-tipo-instalacion-list',
  templateUrl: './tipo-instalacion-list.component.html',
  styleUrls: ['./tipo-instalacion-list.component.scss']
})
export class TipoInstalacionListComponent implements OnInit {

  displayedColumns: string[] = [
    'tipoInstalacionId',
    'nombreTipoInstalacion',
    'idEstado_Estado',
    'opciones'
  ];

  public dataSource:MatTableDataSource<TipoInstalacion>;
  @ViewChild(MatPaginator) paginator: MatPaginator; 
  @ViewChild(MatSort) sort:MatSort;

  constructor(
    public tipoInstalacionService: TipoInstalacionService,
    public matDialog: MatDialog,
    public snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.getTipoInstalaciones();
  }

  getTipoInstalaciones(){
    this.tipoInstalacionService.findAll().subscribe(res=>{
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
    let datos = {saveBool : true, text : 'tipo instalacion'};

    let matDialogRef = this.matDialog.open(
      TipoInstalacionUpdateSaveDialogComponent, 
      this.retornarMatDialogConfig(datos)
    );

    matDialogRef.afterClosed().subscribe(result=>{
      if(result != null){
        this.abrirSnackBar(result, 'OK');
        this.getTipoInstalaciones();
      }
    });

  }

  actualizar(tipoInstalacionId: string){
    let data = {saveBool : false, text : ""+tipoInstalacionId};

    let matDialogRef = this.matDialog.open(
      TipoInstalacionUpdateSaveDialogComponent, 
      this.retornarMatDialogConfig(data)
    );

    matDialogRef.afterClosed().subscribe(result=>{
      if(result != null){
        this.abrirSnackBar(result, 'OK');
        this.getTipoInstalaciones();
      }
    });

  }

  /**
   * 
   * @param tipoTransformadorId 
   * @deprecated usar desactivar(id) en su lugar
   */

  eliminar(tipoInstalacionId: string){
    this.tipoInstalacionService.delete(""+tipoInstalacionId).subscribe(res=>{
      this.abrirSnackBar(res.mensaje, 'Exito');
      this.getTipoInstalaciones();
    },error=>{
      this.abrirSnackBar(error.error.mensaje, 'Error');
    });
    
  }

  esInactivo(tipoInstalacion: TipoInstalacion) : boolean{
    return tipoInstalacion.idEstado_Estado == 2;
  }

  desactivar(tipoInstalacion : TipoInstalacion){
    let data = {
      title : "Desactivar tipo de transformador", 
      body : "¿Esta usted seguro de querer desactivar el tipo " +
      "de transformador con id " + tipoInstalacion.tipoInstalacionId + "?"
    };
    
    let matDialogRef = this.matDialog.open(
      ConfirmationDialogComponent,
      this.retornarMatDialogConfig(data)
    );

    matDialogRef.afterClosed().subscribe(result=>{
      if(result == true){
        this.tipoInstalacionService.deactivate(tipoInstalacion).subscribe(
          data=>{
            this.abrirSnackBar(data.mensaje, 'OK');
            this.getTipoInstalaciones();
          },
          error=>{
            this.abrirSnackBar(error.error.mensaje, 'OK');
          }
        );}

      });

  }

  activar(tipoInstalacion : TipoInstalacion){
    let data = {
      title : "Activar tipo de transformador", 
      body : "¿Esta usted seguro de querer activar el tipo " +
      "de transformador con id " + tipoInstalacion.tipoInstalacionId + "?"
    };
    
    let matDialogRef = this.matDialog.open(
      ConfirmationDialogComponent,
      this.retornarMatDialogConfig(data)
    );

    matDialogRef.afterClosed().subscribe(result=>{
      if(result == true){
        this.tipoInstalacionService.activate(tipoInstalacion).subscribe(
          data=>{
            this.abrirSnackBar(data.mensaje, 'OK');
            this.getTipoInstalaciones();
          },
          error=>{
            this.abrirSnackBar(error.error.mensaje, 'OK');
          }
        );}

      });

  }

}
