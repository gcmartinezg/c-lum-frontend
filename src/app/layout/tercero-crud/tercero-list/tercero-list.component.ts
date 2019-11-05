import { Component, OnInit, ViewChild } from '@angular/core';
import { Tercero } from 'src/app/shared/domain/tercero';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog, MatSnackBar, MatDialogConfig } from '@angular/material';
import { TerceroUpdateSaveDialogComponent } from '../tercero-update-save-dialog/tercero-update-save-dialog.component';
import { TerceroService } from 'src/app/shared/services/tercero.service';
import { ConfirmationDialogComponent } from '../../confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-tercero-list',
  templateUrl: './tercero-list.component.html',
  styleUrls: ['./tercero-list.component.scss']
})
export class TerceroListComponent implements OnInit {
  
  displayedColumns: string[] = [
    'idTercero',
    'tDocId',
    'nombre',
    'direccion',
    'correo',
    'telefono',
    'estado',
    'opciones'
  ];

  public dataSource:MatTableDataSource<Tercero>;
  @ViewChild(MatPaginator) paginator: MatPaginator; 
  @ViewChild(MatSort) sort:MatSort;

  constructor(
    public servicioTercero:TerceroService,
    public matDialog: MatDialog,
    public snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.getTerceros();
  }

  getTerceros(){
    this.servicioTercero.findAll().subscribe(res=>{
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
    let datos = {saveBool : true, text : 'tercero'};

    let matDialogRef = this.matDialog.open(
      TerceroUpdateSaveDialogComponent, 
      this.retornarMatDialogConfig(datos)
    );

    matDialogRef.afterClosed().subscribe(result=>{
      if(result != null){
        this.abrirSnackBar(result, 'OK');
        this.getTerceros();
      }
    });

  }

  actualizar(terceroId: string){
    let data = {saveBool : false, text : ""+terceroId};

    let matDialogRef = this.matDialog.open(
      TerceroUpdateSaveDialogComponent, 
      this.retornarMatDialogConfig(data)
    );

    matDialogRef.afterClosed().subscribe(result=>{
      if(result != null){
        this.abrirSnackBar(result, 'OK');
        this.getTerceros();
      }
    });

  }

  /**
   * 
   * @param terceroId 
   * @deprecated use desactivar(tercero) en su lugar
   */

  eliminar(terceroId: string){
    this.servicioTercero.delete(""+terceroId).subscribe(res=>{
      this.abrirSnackBar(res.mensaje, 'Exito');
      this.getTerceros();
    },error=>{
      this.abrirSnackBar(error.error.mensaje, 'Error');
    });
    
  }

  esInactivo(tercero: Tercero) : boolean{
    return tercero.idEstado_Estado == 2;
  }

  desactivar(tercero : Tercero){
    let data = {
      title : "Desactivar tercero", 
      body : "¿Esta usted seguro de querer desactivar el tercero " +
      "con id " + tercero.terceroId + "?"
    };
    
    let matDialogRef = this.matDialog.open(
      ConfirmationDialogComponent,
      this.retornarMatDialogConfig(data)
    );

    matDialogRef.afterClosed().subscribe(result=>{
      if(result == true){
        this.servicioTercero.deactivate(tercero).subscribe(
          data=>{
            this.abrirSnackBar(data.mensaje, 'OK');
            this.getTerceros();
          },
          error=>{
            this.abrirSnackBar(error.error.mensaje, 'OK');
          }
        );}

      });

  }

  activar(tercero : Tercero){
    let data = {
      title : "Activar tercero", 
      body : "¿Esta usted seguro de querer activar el tercero " +
      "con id " + tercero.terceroId + "?"
    };
    
    let matDialogRef = this.matDialog.open(
      ConfirmationDialogComponent,
      this.retornarMatDialogConfig(data)
    );

    matDialogRef.afterClosed().subscribe(result=>{
      if(result == true){
        this.servicioTercero.activate(tercero).subscribe(
          data=>{
            this.abrirSnackBar(data.mensaje, 'OK');
            this.getTerceros();
          },
          error=>{
            this.abrirSnackBar(error.error.mensaje, 'OK');
          }
        );}

      });

  }

}
