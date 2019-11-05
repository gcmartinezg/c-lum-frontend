import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { Usuario } from 'src/app/shared/domain/usuario';
import { Estado } from 'src/app/shared/domain/estado';
import { Tercero } from 'src/app/shared/domain/tercero';
import { MatDialogRef, MatSnackBar, MatDialog, MAT_DIALOG_DATA, MatDialogConfig, MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { UpdateSaveObject } from 'src/app/shared/domain/update-save-object';
import { UsuarioService } from 'src/app/shared/services/usuario.service';
import { TerceroService } from 'src/app/shared/services/tercero.service';
import { EstadoService } from 'src/app/shared/services/estado.service';
import { ConfirmationDialogComponent } from '../../confirmation-dialog/confirmation-dialog.component';
import { TipoUsuario } from 'src/app/shared/domain/tipo-usuario';
import { TipoUsuarioService } from 'src/app/shared/services/tipo-usuario.service';

@Component({
  selector: 'app-usuario-update-save-dialog',
  templateUrl: './usuario-update-save-dialog.component.html',
  styleUrls: ['./usuario-update-save-dialog.component.scss']
})
export class UsuarioUpdateSaveDialogComponent implements OnInit {

  usuario : Usuario = new Usuario("",null,"",null);
  tipoUsuario : TipoUsuario = new TipoUsuario(null,"");
  tercero : Tercero = new Tercero(null,null,"","","",null,null);
  
  displayedColumns : string[] = [
    'terceroId', 'tipoDocumentoId_TipoDocumento', 'nombreTercero', 'seleccion'
  ];
  dataSource : MatTableDataSource<Tercero>;

  listaEstado : Estado[];
  listaTercero : Tercero[];
  listaTipoUsuario : TipoUsuario[];

  constructor(
    private dialogRef: MatDialogRef<UsuarioUpdateSaveDialogComponent>,
    private snackBar : MatSnackBar,
    private matDialog : MatDialog,
    @Inject(MAT_DIALOG_DATA) public injectedObject: UpdateSaveObject,
    public servicioUsuario : UsuarioService,
    public servicioTercero : TerceroService,
    public servicioTipoUsuario : TipoUsuarioService,
    public servicioEstado : EstadoService
  ) { }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort : MatSort;

  ngOnInit() {
    console.log(this.injectedObject);
    if(!this.injectedObject.saveBool){
      this.getUsuarioPorId();
    }

    this.getListaEstado();
    this.getListaTercero();
    this.getListaTipoUsuario();
  }

  getUsuarioPorId() {
    this.servicioUsuario.findById(this.injectedObject.text).subscribe(result=>{
      this.usuario = result;
      this.getTerceroPorId();
      this.getTipoUsuarioPorId();
    });
  }

  getListaEstado() {
    this.servicioEstado.findAll().subscribe(result=>{
      this.listaEstado =  result;
    });
  }

  getTerceroPorId() {
    console.log(this.usuario.terceroId_Tercero);
    this.servicioTercero.findById(""+this.usuario.terceroId_Tercero).subscribe(result=>{
      this.tercero = result;
    });
  }

  getListaTercero() {
    this.servicioTercero.findAll().subscribe(result=>{
      this.dataSource = new MatTableDataSource(result);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  getTipoUsuarioPorId() {
    console.log(this.usuario.tipoUsuarioId_TipoUsuario);
    this.servicioTipoUsuario.findById(""+this.usuario.tipoUsuarioId_TipoUsuario).subscribe(result=>{
      this.tipoUsuario = result;
    });
  }

  getListaTipoUsuario() {
    this.servicioTipoUsuario.findAll().subscribe(result=>{
      this.listaTipoUsuario =  result;
    });
  }

  abrirSnackBar(mensaje: string, accion: string) {
    this.snackBar.open(mensaje, accion, {
      duration: 3000,
    });
  }

  retornarMatDialogConfig(datos : any) : MatDialogConfig<any>{
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = datos;

    return dialogConfig;
  }

  actualizar() {
    if(this.usuario.usuarioId==null || this.usuario.usuarioId==""){
      return this.snackBar.open('Revise el Id por favor', 'ERROR', {
        duration: 3000,
      });
    }
    if(this.usuario.tipoUsuarioId_TipoUsuario==null ){
      return this.snackBar.open('Revise el tipo usuario por favor', 'ERROR', {
        duration: 3000,
      });
    }
    if(this.usuario.idEstado_Estado==null ){
      return this.snackBar.open('Revise el estado por favor', 'ERROR', {
        duration: 3000,
      });
    }
    if(this.usuario.terceroId_Tercero==null ){
      return this.snackBar.open('Revise el Tercero por favor', 'ERROR', {
        duration: 3000,
      });
    }
    if(this.usuario.contrasenia==null || this.usuario.contrasenia==""){
      return this.snackBar.open('Revise la contraseña por favor', 'ERROR', {
        duration: 3000,
      });
    }
    let data = {
      title : "Actualizar usuario", 
      body : "¿Esta usted seguro de querer actualizar el usuario " +
      "con id " + this.usuario.usuarioId + "?"
    };
    
    let matDialogRef = this.matDialog.open(
      ConfirmationDialogComponent,
      this.retornarMatDialogConfig(data)
    );

    matDialogRef.afterClosed().subscribe(result=>{
      if(result === true){
        console.log("tercero:" + JSON.stringify(this.tercero));
      this.servicioUsuario.update(this.usuario).subscribe(
        data=>{
          this.dialogRef.close(data.mensaje);
        },
        error=>{
          this.abrirSnackBar(error.error.mensaje, 'OK');
        });
      }

    });

  }

  crear() {
    if(this.usuario.usuarioId==null || this.usuario.usuarioId==""){
      return this.snackBar.open('Revise el Id por favor', 'ERROR', {
        duration: 3000,
      });
    }
    if(this.usuario.tipoUsuarioId_TipoUsuario==null ){
      return this.snackBar.open('Revise el tipo usuario por favor', 'ERROR', {
        duration: 3000,
      });
    }
    if(this.usuario.idEstado_Estado==null ){
      return this.snackBar.open('Revise el estado por favor', 'ERROR', {
        duration: 3000,
      });
    }
    if(this.usuario.terceroId_Tercero==null ){
      return this.snackBar.open('Revise el Tercero por favor', 'ERROR', {
        duration: 3000,
      });
    }
    if(this.usuario.contrasenia==null || this.usuario.contrasenia==""){
      return this.snackBar.open('Revise la contraseña por favor', 'ERROR', {
        duration: 3000,
      });
    }
    let data = {
      title : "Crear usuario", 
      body : "¿Esta usted seguro de querer crear el usuario " +
      "con id " + this.usuario.usuarioId + "?"
    };
    
    let matDialogRef = this.matDialog.open(
      ConfirmationDialogComponent,
      this.retornarMatDialogConfig(data)
    );

    matDialogRef.afterClosed().subscribe(result=>{
      if(result === true){
      this.servicioUsuario.save(this.usuario).subscribe(
        data=>{
          this.dialogRef.close(data.mensaje);
        },
        error=>{
          this.abrirSnackBar(error.error.mensaje, 'OK');
        });
      }
      
    });

  }

  cerrar() {
    this.dialogRef.close();
  }

}
