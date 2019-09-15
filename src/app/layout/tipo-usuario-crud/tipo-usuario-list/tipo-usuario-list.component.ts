import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog, MatSnackBar, MatDialogConfig } from '@angular/material';
import { TipoUsuario } from 'src/app/shared/domain/tipo-usuario';
import { TipoUsuarioService } from 'src/app/shared/services/tipo-usuario.service';
import { TipoUsuarioUpdateSaveDialogComponent } from '../tipo-usuario-update-save-dialog/tipo-usuario-update-save-dialog.component';
import { ConfirmationDialogComponent } from '../../confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-tipo-usuario-list',
  templateUrl: './tipo-usuario-list.component.html',
  styleUrls: ['./tipo-usuario-list.component.scss']
})
export class TipoUsuarioListComponent implements OnInit {

  displayedColumns: string[] = [
    'tipoUsuarioId',
    'nombreTipoUsuario',
    'estado',
    'opciones'
  ];

  public dataSource:MatTableDataSource<TipoUsuario>;
  @ViewChild(MatPaginator) paginator: MatPaginator; 
  @ViewChild(MatSort) sort:MatSort;

  constructor(
    public servicioTipoUsuario: TipoUsuarioService,
    public matDialog: MatDialog,
    public snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.getTipoUsuarios();
  }

  getTipoUsuarios(){
    this.servicioTipoUsuario.findAll().subscribe(res=>{
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
    let datos = {saveBool : true, text : 'tipo usuario'};

    let matDialogRef = this.matDialog.open(
      TipoUsuarioUpdateSaveDialogComponent, 
      this.retornarMatDialogConfig(datos)
    );

    matDialogRef.afterClosed().subscribe(result=>{
      if(result != null){
        this.abrirSnackBar(result, 'OK');
        this.getTipoUsuarios();
      }
    });

  }

  actualizar(tipoUsuarioId: string){
    let data = {saveBool : false, text : ""+tipoUsuarioId};

    let matDialogRef = this.matDialog.open(
      TipoUsuarioUpdateSaveDialogComponent, 
      this.retornarMatDialogConfig(data)
    );

    matDialogRef.afterClosed().subscribe(result=>{
      if(result != null){
        this.abrirSnackBar(result, 'OK');
        this.getTipoUsuarios();
      }
    });

  }

  /**
   * 
   * @param tipoUsuarioId 
   * @deprecated usar desactivar(id) en su lugar
   */

  eliminar(tipoUsuarioId: string){
    this.servicioTipoUsuario.delete(""+tipoUsuarioId).subscribe(res=>{
      this.abrirSnackBar(res.mensaje, 'Exito');
      this.getTipoUsuarios();
    },error=>{
      this.abrirSnackBar(error.error.mensaje, 'Error');
    });
    
  }

  esInactivo(tipoUsuario: TipoUsuario) : boolean{
    return tipoUsuario.idEstado_Estado == 2;
  }

  desactivar(tipoUsuario : TipoUsuario){
    let data = {
      title : "Desactivar tipo de usuario", 
      body : "¿Esta usted seguro de querer desactivar el tipo " +
      "de usuario con id " + tipoUsuario.tipoUsuarioId + "?"
    };
    
    let matDialogRef = this.matDialog.open(
      ConfirmationDialogComponent,
      this.retornarMatDialogConfig(data)
    );

    matDialogRef.afterClosed().subscribe(result=>{
      if(result == true){
        this.servicioTipoUsuario.deactivate(tipoUsuario).subscribe(
          data=>{
            this.abrirSnackBar(data.mensaje, 'OK');
            this.getTipoUsuarios();
          },
          error=>{
            this.abrirSnackBar(error.error.mensaje, 'OK');
          }
        );}

      });

  }

  activar(tipoUsuario : TipoUsuario){
    let data = {
      title : "Activar tipo de usuario", 
      body : "¿Esta usted seguro de querer activar el tipo " +
      "de usuario con id " + tipoUsuario.tipoUsuarioId + "?"
    };
    
    let matDialogRef = this.matDialog.open(
      ConfirmationDialogComponent,
      this.retornarMatDialogConfig(data)
    );

    matDialogRef.afterClosed().subscribe(result=>{
      if(result == true){
        this.servicioTipoUsuario.activate(tipoUsuario).subscribe(
          data=>{
            this.abrirSnackBar(data.mensaje, 'OK');
            this.getTipoUsuarios();
          },
          error=>{
            this.abrirSnackBar(error.error.mensaje, 'OK');
          }
        );}

      });

  }

}
