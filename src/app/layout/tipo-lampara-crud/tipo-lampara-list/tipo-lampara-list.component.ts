import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog, MatSnackBar, MatDialogConfig } from '@angular/material';
import { TipoLampara } from 'src/app/shared/domain/tipo-lampara';
import { TipoLamparaService } from 'src/app/shared/services/tipo-lampara.service';
import { TipoLamparaUpdateSaveDialogComponent } from '../tipo-lampara-update-save-dialog/tipo-lampara-update-save-dialog.component';
import { ConfirmationDialogComponent } from '../../confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-tipo-lampara-list',
  templateUrl: './tipo-lampara-list.component.html',
  styleUrls: ['./tipo-lampara-list.component.scss']
})
export class TipoLamparaListComponent implements OnInit {

  displayedColumns: string[] = [
    'tipoLamparaId',
    'nombreTipoLampara',
    'idEstado_Estado',
    'opciones'
  ];

  public dataSource:MatTableDataSource<TipoLampara>;
  @ViewChild(MatPaginator) paginator: MatPaginator; 
  @ViewChild(MatSort) sort:MatSort;

  constructor(
    public tipoLamparaService: TipoLamparaService,
    public matDialog: MatDialog,
    public snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.getTipoLamparas();
  }

  getTipoLamparas(){
    this.tipoLamparaService.findAll().subscribe(res=>{
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
    let datos = {saveBool : true, text : 'tipo lampara'};

    let matDialogRef = this.matDialog.open(
      TipoLamparaUpdateSaveDialogComponent, 
      this.retornarMatDialogConfig(datos)
    );

    matDialogRef.afterClosed().subscribe(result=>{
      if(result != null){
        this.abrirSnackBar(result, 'OK');
        this.getTipoLamparas();
      }
    });

  }

  actualizar(tipoLamparaId: string){
    let data = {saveBool : false, text : ""+tipoLamparaId};

    let matDialogRef = this.matDialog.open(
      TipoLamparaUpdateSaveDialogComponent, 
      this.retornarMatDialogConfig(data)
    );

    matDialogRef.afterClosed().subscribe(result=>{
      if(result != null){
        this.abrirSnackBar(result, 'OK');
        this.getTipoLamparas();
      }
    });

  }

  /**
   * 
   * @param tipoTransformadorId 
   * @deprecated usar desactivar(id) en su lugar
   */

  eliminar(tipoLamparaId: string){
    this.tipoLamparaService.delete(""+tipoLamparaId).subscribe(res=>{
      this.abrirSnackBar(res.mensaje, 'Exito');
      this.getTipoLamparas();
    },error=>{
      this.abrirSnackBar(error.error.mensaje, 'Error');
    });
    
  }

  esInactivo(tipoLampara: TipoLampara) : boolean{
    return tipoLampara.idEstado_Estado == 2;
  }

  desactivar(tipoLampara: TipoLampara){
    let data = {
      title : "Desactivar tipo de transformador", 
      body : "¿Esta usted seguro de querer desactivar el tipo " +
      "de transformador con id " + tipoLampara.tipoLamparaId+ "?"
    };
    
    let matDialogRef = this.matDialog.open(
      ConfirmationDialogComponent,
      this.retornarMatDialogConfig(data)
    );

    matDialogRef.afterClosed().subscribe(result=>{
      if(result == true){
        this.tipoLamparaService.deactivate(tipoLampara).subscribe(
          data=>{
            this.abrirSnackBar(data.mensaje, 'OK');
            this.getTipoLamparas();
          },
          error=>{
            this.abrirSnackBar(error.error.mensaje, 'OK');
          }
        );}

      });

  }

  activar(tipoLampara : TipoLampara){
    let data = {
      title : "Activar tipo de transformador", 
      body : "¿Esta usted seguro de querer activar el tipo " +
      "de transformador con id " + tipoLampara.tipoLamparaId+ "?"
    };
    
    let matDialogRef = this.matDialog.open(
      ConfirmationDialogComponent,
      this.retornarMatDialogConfig(data)
    );

    matDialogRef.afterClosed().subscribe(result=>{
      if(result == true){
        this.tipoLamparaService.activate(tipoLampara).subscribe(
          data=>{
            this.abrirSnackBar(data.mensaje, 'OK');
            this.getTipoLamparas();
          },
          error=>{
            this.abrirSnackBar(error.error.mensaje, 'OK');
          }
        );}

      });

  }

}
