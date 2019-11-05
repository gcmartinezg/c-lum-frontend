import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog, MatSnackBar, MatDialogConfig } from '@angular/material';
import { TipoBalasto } from 'src/app/shared/domain/tipo-balasto';
import { TipoBalastroService } from 'src/app/shared/services/tipo-balastro.service';
import { TipoBalastoUpdateSaveDialogComponent } from '../tipo-balasto-update-save-dialog/tipo-balasto-update-save-dialog.component';
import { ConfirmationDialogComponent } from '../../confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-tipo-balasto-list',
  templateUrl: './tipo-balasto-list.component.html',
  styleUrls: ['./tipo-balasto-list.component.scss']
})
export class TipoBalastoListComponent implements OnInit {

  displayedColumns: string[] = [
    'tipoBalastoId',
    'nombreTipoBalasto',
    'idEstado_Estado',
    'opciones'
  ];

  public dataSource:MatTableDataSource<TipoBalasto>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort:MatSort;
  constructor(
    public tipoBalastoService: TipoBalastroService,
    public MatDialog: MatDialog,
    public snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.getTipoBalastos();
  }

  getTipoBalastos(){
    this.tipoBalastoService.findAll().subscribe(
      data=>{
        console.log(data);
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error=>{
      }
    );
  }

  abrirSnackBar(message: string, action: string){
    this.snackBar.open(message, action, {
      duration: 3000,
    });
  }

  aplicarFiltro(filterValue: string){
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  retornarMatDialogConfig(datos : any) : MatDialogConfig<any>{
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;

    dialogConfig.data = datos;

    return dialogConfig;
  }

  crear(){
    let datos = {
      saveBool : true,
      text: 'tipoBalasto'
    };
    let matDialogRef = this.MatDialog.open(
      TipoBalastoUpdateSaveDialogComponent,
      this.retornarMatDialogConfig(datos)
    );

    matDialogRef.afterClosed().subscribe(res=>{
      if(res!=null){
        this.abrirSnackBar(res, 'Ok');
        this.getTipoBalastos();
      }
    }, rej=>{});
  }

  actualizar(tipoBalastoId: string){
    let data = {saveBool:false, text:tipoBalastoId};
    let matDialogRef = this.MatDialog.open(
      TipoBalastoUpdateSaveDialogComponent,
      this.retornarMatDialogConfig(data)
    );
    matDialogRef.afterClosed().subscribe(res=>{
      if(res!= null){
        this.abrirSnackBar(res, 'Ok');
        this.getTipoBalastos();
      }
    })
  }

/**
   * 
   * @param tipoTransformadorId 
   * @deprecated usar desactivar(id) en su lugar
   */

  eliminar(tipoBalastoId: string){
    this.tipoBalastoService.delete(""+tipoBalastoId).subscribe(res=>{
      this.abrirSnackBar(res.mensaje, 'Exito');
      this.getTipoBalastos();
    },error=>{
      this.abrirSnackBar(error.error.mensaje, 'Error');
    });
    
  }

  esInactivo(tipoBalasto: TipoBalasto) : boolean{
    return tipoBalasto.idEstado_Estado == 2;
  }

  desactivar(tipoBalasto: TipoBalasto){
    let data = {
      title : "Desactivar tipo de transformador", 
      body : "¿Esta usted seguro de querer desactivar el tipo " +
      "de transformador con id " + tipoBalasto.tipoBalastoId + "?"
    };
    
    let matDialogRef = this.MatDialog.open(
      ConfirmationDialogComponent,
      this.retornarMatDialogConfig(data)
    );

    matDialogRef.afterClosed().subscribe(result=>{
      if(result == true){
        this.tipoBalastoService.deactivate(tipoBalasto).subscribe(
          data=>{
            this.abrirSnackBar(data.mensaje, 'OK');
            this.getTipoBalastos();
          },
          error=>{
            this.abrirSnackBar(error.error.mensaje, 'OK');
          }
        );}

      });

  }

  activar(tipoBalasto: TipoBalasto){
    let data = {
      title : "Activar tipo de transformador", 
      body : "¿Esta usted seguro de querer activar el tipo " +
      "de transformador con id " + tipoBalasto.tipoBalastoId + "?"
    };
    
    let matDialogRef = this.MatDialog.open(
      ConfirmationDialogComponent,
      this.retornarMatDialogConfig(data)
    );

    matDialogRef.afterClosed().subscribe(result=>{
      if(result == true){
        this.tipoBalastoService.activate(tipoBalasto).subscribe(
          data=>{
            this.abrirSnackBar(data.mensaje, 'OK');
            this.getTipoBalastos();
          },
          error=>{
            this.abrirSnackBar(error.error.mensaje, 'OK');
          }
        );}

      });

  }

}
