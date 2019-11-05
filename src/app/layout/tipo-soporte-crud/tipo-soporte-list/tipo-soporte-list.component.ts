import { Component, OnInit, ViewChild } from '@angular/core';
import { TipoSoporte } from 'src/app/shared/domain/tipo-soporte';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog, MatSnackBar, MatDialogConfig } from '@angular/material';
import { TipoSoporteService } from 'src/app/shared/services/tipo-soporte.service';
import { TipoSoporteUpdateSaveDialogComponent } from '../tipo-soporte-update-save-dialog/tipo-soporte-update-save-dialog.component';
import { ConfirmationDialogComponent } from '../../confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-tipo-soporte-list',
  templateUrl: './tipo-soporte-list.component.html',
  styleUrls: ['./tipo-soporte-list.component.scss']
})
export class TipoSoporteListComponent implements OnInit {
  displayedColumns: string[] = [
    'tipoSoporteId',
    'nombreTipoSoporte',
    'estado',
    'opciones'
  ];

  public dataSource:MatTableDataSource<TipoSoporte>;
  @ViewChild(MatPaginator) paginator: MatPaginator; 
  @ViewChild(MatSort) sort:MatSort;

  constructor(
    public servicioTipoSoporte: TipoSoporteService,
    public matDialog: MatDialog,
    public snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.getTipoSoportes();
  }

  getTipoSoportes(){
    this.servicioTipoSoporte.findAll().subscribe(res=>{
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
    let datos = {saveBool : true, text : 'tipo soporte'};

    let matDialogRef = this.matDialog.open(
      TipoSoporteUpdateSaveDialogComponent, 
      this.retornarMatDialogConfig(datos)
    );

    matDialogRef.afterClosed().subscribe(result=>{
      if(result != null){
        this.abrirSnackBar(result, 'OK');
        this.getTipoSoportes();
      }
    });

  }

  actualizar(tipoSoporteId: string){
    let data = {saveBool : false, text : ""+tipoSoporteId};

    let matDialogRef = this.matDialog.open(
      TipoSoporteUpdateSaveDialogComponent, 
      this.retornarMatDialogConfig(data)
    );

    matDialogRef.afterClosed().subscribe(result=>{
      if(result != null){
        this.abrirSnackBar(result, 'OK');
        this.getTipoSoportes();
      }
    });

  }

  /**
   * 
   * @param tipoSoporteId 
   * @deprecated usar desactivar(id) en su lugar
   */

  eliminar(tipoSoporteId: string){
    this.servicioTipoSoporte.delete(""+tipoSoporteId).subscribe(res=>{
      this.abrirSnackBar(res.mensaje, 'Exito');
      this.getTipoSoportes();
    },error=>{
      this.abrirSnackBar(error.error.mensaje, 'Error');
    });
    
  }

  esInactivo(tipoSoporte: TipoSoporte) : boolean{
    return tipoSoporte.idEstado_Estado == 2;
  }

  desactivar(tipoSoporte : TipoSoporte){
    let data = {
      title : "Desactivar tipo de soporte", 
      body : "¿Esta usted seguro de querer desactivar el tipo " +
      "de soporte con id " + tipoSoporte.tipoSoporteId + "?"
    };
    
    let matDialogRef = this.matDialog.open(
      ConfirmationDialogComponent,
      this.retornarMatDialogConfig(data)
    );

    matDialogRef.afterClosed().subscribe(result=>{
      if(result == true){
        this.servicioTipoSoporte.deactivate(tipoSoporte).subscribe(
          data=>{
            this.abrirSnackBar(data.mensaje, 'OK');
            this.getTipoSoportes();
          },
          error=>{
            this.abrirSnackBar(error.error.mensaje, 'OK');
          }
        );}

      });

  }

  activar(tipoSoporte : TipoSoporte){
    let data = {
      title : "Activar tipo de soporte", 
      body : "¿Esta usted seguro de querer activar el tipo " +
      "de soporte con id " + tipoSoporte.tipoSoporteId + "?"
    };
    
    let matDialogRef = this.matDialog.open(
      ConfirmationDialogComponent,
      this.retornarMatDialogConfig(data)
    );

    matDialogRef.afterClosed().subscribe(result=>{
      if(result == true){
        this.servicioTipoSoporte.activate(tipoSoporte).subscribe(
          data=>{
            this.abrirSnackBar(data.mensaje, 'OK');
            this.getTipoSoportes();
          },
          error=>{
            this.abrirSnackBar(error.error.mensaje, 'OK');
          }
        );}

      });

  }

}
