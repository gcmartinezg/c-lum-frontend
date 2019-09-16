import { Component, OnInit, ViewChild } from '@angular/core';
import { TipoEspacioIluminado } from 'src/app/shared/domain/tipo-espacio-iluminado';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog, MatSnackBar, MatDialogConfig } from '@angular/material';
import { TipoEspacioIluminadoService } from 'src/app/shared/services/tipo-espacio-iluminado.service';
import { TespIluminadoUpdateSaveDialogComponent } from '../tesp-iluminado-update-save-dialog/tesp-iluminado-update-save-dialog.component';
import { ConfirmationDialogComponent } from '../../confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-tesp-iluminado-list',
  templateUrl: './tesp-iluminado-list.component.html',
  styleUrls: ['./tesp-iluminado-list.component.scss']
})
export class TespIluminadoListComponent implements OnInit {

  displayedColumns: string[] = [
    'tipoEspacioIluminadoId',
    'nombreTipoEspacioIluminado',
    'idEstado_Estado',
    'opciones'
  ];

  public dataSource:MatTableDataSource<TipoEspacioIluminado>;
  @ViewChild(MatPaginator) paginator: MatPaginator; 
  @ViewChild(MatSort) sort:MatSort;

  constructor(
    public tipoEspacioIluminadoService: TipoEspacioIluminadoService,
    public matDialog: MatDialog,
    public snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.getTipoEspacioIluminados();
  }

  getTipoEspacioIluminados(){
    this.tipoEspacioIluminadoService.findAll().subscribe(res=>{
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
    let datos = {saveBool : true, text : 'tipo espacio iluminado'};

    let matDialogRef = this.matDialog.open(
      TespIluminadoUpdateSaveDialogComponent, 
      this.retornarMatDialogConfig(datos)
    );

    matDialogRef.afterClosed().subscribe(result=>{
      if(result != null){
        this.abrirSnackBar(result, 'OK');
        this.getTipoEspacioIluminados();
      }
    });

  }

  actualizar(tipoTransformadorId: string){
    let data = {saveBool : false, text : ""+tipoTransformadorId};

    let matDialogRef = this.matDialog.open(
      TespIluminadoUpdateSaveDialogComponent, 
      this.retornarMatDialogConfig(data)
    );

    matDialogRef.afterClosed().subscribe(result=>{
      if(result != null){
        this.abrirSnackBar(result, 'OK');
        this.getTipoEspacioIluminados();
      }
    });

  }

  /**
   * 
   * @param tipoTransformadorId 
   * @deprecated usar desactivar(id) en su lugar
   */

  eliminar(tipoTransformadorId: string){
    this.tipoEspacioIluminadoService.delete(""+tipoTransformadorId).subscribe(res=>{
      this.abrirSnackBar(res.mensaje, 'Exito');
      this.getTipoEspacioIluminados();
    },error=>{
      this.abrirSnackBar(error.error.mensaje, 'Error');
    });
    
  }

  esInactivo(tipoEspacioIluminado: TipoEspacioIluminado) : boolean{
    return tipoEspacioIluminado.idEstado_Estado == 2;
  }

  desactivar(tipoEspacioIluminado : TipoEspacioIluminado){
    let data = {
      title : "Desactivar tipo de transformador", 
      body : "¿Esta usted seguro de querer desactivar el tipo " +
      "de transformador con id " + tipoEspacioIluminado.tipoEspacioIluminadoId + "?"
    };
    
    let matDialogRef = this.matDialog.open(
      ConfirmationDialogComponent,
      this.retornarMatDialogConfig(data)
    );

    matDialogRef.afterClosed().subscribe(result=>{
      if(result == true){
        this.tipoEspacioIluminadoService.deactivate(tipoEspacioIluminado).subscribe(
          data=>{
            this.abrirSnackBar(data.mensaje, 'OK');
            this.getTipoEspacioIluminados();
          },
          error=>{
            this.abrirSnackBar(error.error.mensaje, 'OK');
          }
        );}

      });

  }

  activar(tipoEspacioIluminado : TipoEspacioIluminado){
    let data = {
      title : "Activar tipo de transformador", 
      body : "¿Esta usted seguro de querer activar el tipo " +
      "de transformador con id " + tipoEspacioIluminado.tipoEspacioIluminadoId + "?"
    };
    
    let matDialogRef = this.matDialog.open(
      ConfirmationDialogComponent,
      this.retornarMatDialogConfig(data)
    );

    matDialogRef.afterClosed().subscribe(result=>{
      if(result == true){
        this.tipoEspacioIluminadoService.activate(tipoEspacioIluminado).subscribe(
          data=>{
            this.abrirSnackBar(data.mensaje, 'OK');
            this.getTipoEspacioIluminados();
          },
          error=>{
            this.abrirSnackBar(error.error.mensaje, 'OK');
          }
        );}

      });

  }

}
