import { Component, OnInit, ViewChild } from '@angular/core';
import { TipoZona } from 'src/app/shared/domain/tipo-zona';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog, MatSnackBar, MatDialogConfig } from '@angular/material';
import { TipoZonaService } from 'src/app/shared/services/tipo-zona.service';
import { TipoZonaUpdateSaveDialogComponent } from '../tipo-zona-update-save-dialog/tipo-zona-update-save-dialog.component';
import { ConfirmationDialogComponent } from '../../confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-tipo-zona-list',
  templateUrl: './tipo-zona-list.component.html',
  styleUrls: ['./tipo-zona-list.component.scss']
})
export class TipoZonaListComponent implements OnInit {

  displayedColumns: string[] = [
    'tipoZonaId',
    'nombreTipoZona',
    'estado',
    'opciones'
  ];

  public dataSource:MatTableDataSource<TipoZona>;
  @ViewChild(MatPaginator) paginator: MatPaginator; 
  @ViewChild(MatSort) sort:MatSort;

  constructor(
    public servicioTipoZona: TipoZonaService,
    public matDialog: MatDialog,
    public snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.getTipoZonas();
  }

  getTipoZonas(){
    this.servicioTipoZona.findAll().subscribe(res=>{
      console.log(res);
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
    
  }

  abrirSnackBar(message: string, action: string) {
    this.snackBar.open(message, action);
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
    let datos = {saveBool : true, text : 'tipo zona'};

    let matDialogRef = this.matDialog.open(
      TipoZonaUpdateSaveDialogComponent, 
      this.retornarMatDialogConfig(datos)
    );

    matDialogRef.afterClosed().subscribe(result=>{
      if(result != null){
        this.abrirSnackBar(result, 'OK');
        this.getTipoZonas();
      }
    });

  }

  actualizar(tipoZonaId: string){
    let data = {saveBool : false, text : ""+tipoZonaId};

    let matDialogRef = this.matDialog.open(
      TipoZonaUpdateSaveDialogComponent, 
      this.retornarMatDialogConfig(data)
    );

    matDialogRef.afterClosed().subscribe(result=>{
      if(result != null){
        this.abrirSnackBar(result, 'OK');
        this.getTipoZonas();
      }
    });

  }

  /**
   * 
   * @param tipoZonaId 
   * @deprecated usar desactivar(id) en su lugar
   */

  eliminar(tipoZonaId: string){
    this.servicioTipoZona.delete(""+tipoZonaId).subscribe(res=>{
      this.abrirSnackBar(res.mensaje, 'Exito');
      this.getTipoZonas();
    },error=>{
      this.abrirSnackBar(error.error.mensaje, 'Error');
    });
    
  }

  esInactivo(tipoZona: TipoZona) : boolean{
    return tipoZona.idEstado_Estado == 2;
  }

  desactivar(tipoZona : TipoZona){
    let data = {
      title : "Desactivar tipo de zona", 
      body : "¿Esta usted seguro de querer desactivar el tipo " +
      "de zona con id " + tipoZona.tipoZonaId + "?"
    };
    
    let matDialogRef = this.matDialog.open(
      ConfirmationDialogComponent,
      this.retornarMatDialogConfig(data)
    );

    matDialogRef.afterClosed().subscribe(result=>{
      if(result == true){
        this.servicioTipoZona.deactivate(tipoZona).subscribe(
          data=>{
            this.abrirSnackBar(data.mensaje, 'OK');
            this.getTipoZonas();
          },
          error=>{
            this.abrirSnackBar(error.error.mensaje, 'OK');
          }
        );}

      });

  }

  activar(tipoZona : TipoZona){
    let data = {
      title : "Activar tipo de zona", 
      body : "¿Esta usted seguro de querer activar el tipo " +
      "de zona con id " + tipoZona.tipoZonaId + "?"
    };
    
    let matDialogRef = this.matDialog.open(
      ConfirmationDialogComponent,
      this.retornarMatDialogConfig(data)
    );

    matDialogRef.afterClosed().subscribe(result=>{
      if(result == true){
        this.servicioTipoZona.activate(tipoZona).subscribe(
          data=>{
            this.abrirSnackBar(data.mensaje, 'OK');
            this.getTipoZonas();
          },
          error=>{
            this.abrirSnackBar(error.error.mensaje, 'OK');
          }
        );}

      });

  }

}
