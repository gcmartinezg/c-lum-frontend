import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog, MatSnackBar, MatDialogConfig } from '@angular/material';
import { Usuario } from 'src/app/shared/domain/usuario';
import { UsuarioService } from 'src/app/shared/services/usuario.service';
import { UsuarioUpdateSaveDialogComponent } from '../usuario-update-save-dialog/usuario-update-save-dialog.component';
import { ConfirmationDialogComponent } from '../../confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.scss']
})
export class UsuarioListComponent implements OnInit {

  displayedColumns: string[] = [
    'usuarioId',
    'terceroId_Tercero',
    'contrasenia',
    'tipoUsuarioId_TipoUsuario',
    'idEstado_Estado',
    'opciones'
  ];

  public dataSource:MatTableDataSource<Usuario>;
  @ViewChild(MatPaginator) paginator: MatPaginator; 
  @ViewChild(MatSort) sort:MatSort;

  constructor(
    public servicioUsuario: UsuarioService,
    public matDialog: MatDialog,
    public snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.getUsuarios();
  }

  getUsuarios(){
    this.servicioUsuario.findAll().subscribe(res=>{
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
    let datos = {saveBool : true, text : 'usuario'};

    let matDialogRef = this.matDialog.open(
      UsuarioUpdateSaveDialogComponent, 
      this.retornarMatDialogConfig(datos)
    );

    matDialogRef.afterClosed().subscribe(result=>{
      if(result != null){
        this.abrirSnackBar(result, 'OK');
        this.getUsuarios();
      }
    });

  }

  actualizar(usuarioId: string){
    let data = {saveBool : false, text : ""+usuarioId};

    let matDialogRef = this.matDialog.open(
      UsuarioUpdateSaveDialogComponent, 
      this.retornarMatDialogConfig(data)
    );

    matDialogRef.afterClosed().subscribe(result=>{
      if(result != null){
        this.abrirSnackBar(result, 'OK');
        this.getUsuarios();
      }
    });

  }

  /**
   * 
   * @param usuarioId 
   * @deprecated usar desactivar(id) en su lugar
   */

  eliminar(usuarioId: string){
    this.servicioUsuario.delete(""+usuarioId).subscribe(res=>{
      this.abrirSnackBar(res.mensaje, 'Exito');
      this.getUsuarios();
    },error=>{
      this.abrirSnackBar(error.error.mensaje, 'Error');
    });
    
  }

  esInactivo(usuario: Usuario) : boolean{
    return usuario.idEstado_Estado == 2;
  }

  desactivar(usuario : Usuario){
    let data = {
      title : "Desactivar usuario", 
      body : "¿Esta usted seguro de querer desactivar el usuario " +
      "con id " + usuario.usuarioId + "?"
    };
    
    let matDialogRef = this.matDialog.open(
      ConfirmationDialogComponent,
      this.retornarMatDialogConfig(data)
    );

    matDialogRef.afterClosed().subscribe(result=>{
      if(result == true){
        this.servicioUsuario.deactivate(usuario).subscribe(
          data=>{
            this.abrirSnackBar(data.mensaje, 'OK');
            this.getUsuarios();
          },
          error=>{
            this.abrirSnackBar(error.error.mensaje, 'OK');
          }
        );}

      });

  }

  activar(usuario : Usuario){
    let data = {
      title : "Activar usuario", 
      body : "¿Esta usted seguro de querer activar el usuario " +
      "con id " + usuario.usuarioId + "?"
    };
    
    let matDialogRef = this.matDialog.open(
      ConfirmationDialogComponent,
      this.retornarMatDialogConfig(data)
    );

    matDialogRef.afterClosed().subscribe(result=>{
      if(result == true){
        this.servicioUsuario.activate(usuario).subscribe(
          data=>{
            this.abrirSnackBar(data.mensaje, 'OK');
            this.getUsuarios();
          },
          error=>{
            this.abrirSnackBar(error.error.mensaje, 'OK');
          }
        );}

      });

  }

}
