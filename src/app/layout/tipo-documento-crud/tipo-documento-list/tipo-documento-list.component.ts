import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog, MatSnackBar, MatDialogConfig } from '@angular/material';
import { TipoDocumento } from 'src/app/shared/domain/tipo-documento';
import { TipoDocumentoService } from 'src/app/shared/services/tipo-documento.service';
import { TipoDocumentoUpdateSaveDialogComponent } from '../tipo-documento-update-save-dialog/tipo-documento-update-save-dialog.component';
import { ConfirmationDialogComponent } from '../../confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-tipo-documento-list',
  templateUrl: './tipo-documento-list.component.html',
  styleUrls: ['./tipo-documento-list.component.scss']
})
export class TipoDocumentoListComponent implements OnInit {

  displayedColumns: string[] = [
    'tipoDocumentoId',
    'nombreTipoDocumento',
    'idEstado_Estado',
    'opciones'
  ];

  public dataSource:MatTableDataSource<TipoDocumento>;
  @ViewChild(MatPaginator) paginator: MatPaginator; 
  @ViewChild(MatSort) sort:MatSort;

  constructor(
    public tipoDocumentoService: TipoDocumentoService,
    public matDialog: MatDialog,
    public snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.getTipoDocumentos();
  }

  getTipoDocumentos(){
    this.tipoDocumentoService.findAll().subscribe(res=>{
      console.log(res);
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }, error =>{
      console.log(error);
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
    let datos = {saveBool : true, text : 'tipo documento'};

    let matDialogRef = this.matDialog.open(
      TipoDocumentoUpdateSaveDialogComponent, 
      this.retornarMatDialogConfig(datos)
    );

    matDialogRef.afterClosed().subscribe(result=>{
      if(result != null){
        this.abrirSnackBar(result, 'OK');
        this.getTipoDocumentos();
      }
    });

  }

  actualizar(tipoDocumentoId: string){
    let data = {saveBool : false, text : ""+tipoDocumentoId};

    let matDialogRef = this.matDialog.open(
      TipoDocumentoUpdateSaveDialogComponent, 
      this.retornarMatDialogConfig(data)
    );

    matDialogRef.afterClosed().subscribe(result=>{
      if(result != null){
        this.abrirSnackBar(result, 'OK');
        this.getTipoDocumentos();
      }
    });

  }

  /**
   * 
   * @param tipoTransformadorId 
   * @deprecated usar desactivar(id) en su lugar
   */

  eliminar(tipoTransformadorId: string){
    this.tipoDocumentoService.delete(""+tipoTransformadorId).subscribe(res=>{
      this.abrirSnackBar(res.mensaje, 'Exito');
      this.getTipoDocumentos();
    },error=>{
      this.abrirSnackBar(error.error.mensaje, 'Error');
    });
    
  }

  esInactivo(tipoDocumento: TipoDocumento) : boolean{
    return tipoDocumento.idEstado_Estado == 2;
  }

  desactivar(tipoDocumento : TipoDocumento){
    let data = {
      title : "Desactivar tipo de transformador", 
      body : "¿Esta usted seguro de querer desactivar el tipo " +
      "de Documento con id " + tipoDocumento.tipoDocumentoId + "?"
    };
    
    let matDialogRef = this.matDialog.open(
      ConfirmationDialogComponent,
      this.retornarMatDialogConfig(data)
    );

    matDialogRef.afterClosed().subscribe(result=>{
      if(result == true){
        this.tipoDocumentoService.deactivate(tipoDocumento).subscribe(
          data=>{
            this.abrirSnackBar(data.mensaje, 'OK');
            this.getTipoDocumentos();
          },
          error=>{
            this.abrirSnackBar(error.error.mensaje, 'OK');
          }
        );}

      });

  }

  activar(tipoDocumento : TipoDocumento){
    let data = {
      title : "Activar tipo de transformador", 
      body : "¿Esta usted seguro de querer activar el tipo " +
      "de Documento con id " + tipoDocumento.tipoDocumentoId + "?"
    };
    
    let matDialogRef = this.matDialog.open(
      ConfirmationDialogComponent,
      this.retornarMatDialogConfig(data)
    );

    matDialogRef.afterClosed().subscribe(result=>{
      if(result == true){
        this.tipoDocumentoService.activate(tipoDocumento).subscribe(
          data=>{
            this.abrirSnackBar(data.mensaje, 'OK');
            this.getTipoDocumentos();
          },
          error=>{
            this.abrirSnackBar(error.error.mensaje, 'OK');
          }
        );}

      });

  }
}
