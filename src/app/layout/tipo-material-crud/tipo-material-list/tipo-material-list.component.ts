import { Component, OnInit, ViewChild } from '@angular/core';
import { TipoMaterial } from 'src/app/shared/domain/tipo-material';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog, MatSnackBar, MatDialogConfig } from '@angular/material';
import { TipoMaterialService } from 'src/app/shared/services/tipo-material.service';
import { TipoMaterialUpdateSaveDialogComponent } from '../tipo-material-update-save-dialog/tipo-material-update-save-dialog.component';
import { ConfirmationDialogComponent } from '../../confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-tipo-material-list',
  templateUrl: './tipo-material-list.component.html',
  styleUrls: ['./tipo-material-list.component.scss']
})
export class TipoMaterialListComponent implements OnInit {

  displayedColumns: string[] = [
    'idTipoMaterial',
    'nombreTipoMaterial',
    'estado',
    'opciones'
  ];

  public dataSource:MatTableDataSource<TipoMaterial>;
  @ViewChild(MatPaginator) paginator: MatPaginator; 
  @ViewChild(MatSort) sort:MatSort;

  constructor(
    public servicioTipoMaterial: TipoMaterialService,
    public matDialog: MatDialog,
    public snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.getTipoMateriales();
  }

  getTipoMateriales(){
    this.servicioTipoMaterial.findAll().subscribe(res=>{
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
    let datos = {saveBool : true, text : 'tipo material'};

    let matDialogRef = this.matDialog.open(
      TipoMaterialUpdateSaveDialogComponent, 
      this.retornarMatDialogConfig(datos)
    );

    matDialogRef.afterClosed().subscribe(result=>{
      if(result != null){
        this.abrirSnackBar(result, 'OK');
        this.getTipoMateriales();
      }
    });

  }

  actualizar(tipoMaterialId: string){
    let data = {saveBool : false, text : ""+tipoMaterialId};

    let matDialogRef = this.matDialog.open(
      TipoMaterialUpdateSaveDialogComponent, 
      this.retornarMatDialogConfig(data)
    );

    matDialogRef.afterClosed().subscribe(result=>{
      if(result != null){
        this.abrirSnackBar(result, 'OK');
        this.getTipoMateriales();
      }
    });

  }

  /**
   * 
   * @param tipoMaterialId 
   * @deprecated usar desactivar(id) en su lugar
   */

  eliminar(tipoMaterialId: string){
    this.servicioTipoMaterial.delete(""+tipoMaterialId).subscribe(res=>{
      this.abrirSnackBar(res.mensaje, 'Exito');
      this.getTipoMateriales();
    },error=>{
      this.abrirSnackBar(error.error.mensaje, 'Error');
    });
    
  }

  esInactivo(tipoMaterial: TipoMaterial) : boolean{
    return tipoMaterial.idEstado_Estado == 2;
  }

  desactivar(tipoMaterial : TipoMaterial){
    let data = {
      title : "Desactivar tipo de material", 
      body : "¿Esta usted seguro de querer desactivar el tipo " +
      "de material con id " + tipoMaterial.tipoMaterialId + "?"
    };
    
    let matDialogRef = this.matDialog.open(
      ConfirmationDialogComponent,
      this.retornarMatDialogConfig(data)
    );

    matDialogRef.afterClosed().subscribe(result=>{
      if(result == true){
        this.servicioTipoMaterial.deactivate(tipoMaterial).subscribe(
          data=>{
            this.abrirSnackBar(data.mensaje, 'OK');
            this.getTipoMateriales();
          },
          error=>{
            this.abrirSnackBar(error.error.mensaje, 'OK');
          }
        );}

      });

  }

  activar(tipoMaterial : TipoMaterial){
    let data = {
      title : "Activar tipo de material", 
      body : "¿Esta usted seguro de querer activar el tipo " +
      "de material con id " + tipoMaterial.tipoMaterialId + "?"
    };
    
    let matDialogRef = this.matDialog.open(
      ConfirmationDialogComponent,
      this.retornarMatDialogConfig(data)
    );

    matDialogRef.afterClosed().subscribe(result=>{
      if(result == true){
        this.servicioTipoMaterial.activate(tipoMaterial).subscribe(
          data=>{
            this.abrirSnackBar(data.mensaje, 'OK');
            this.getTipoMateriales();
          },
          error=>{
            this.abrirSnackBar(error.error.mensaje, 'OK');
          }
        );}

      });

  }

}
