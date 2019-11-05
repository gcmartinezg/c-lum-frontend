import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog, MatSnackBar, MatDialogConfig } from '@angular/material';
import { Estado } from 'src/app/shared/domain/estado';
import { EstadoService } from 'src/app/shared/services/estado.service';
import { EstadoUpdateSaveDialogComponent } from '../estado-update-save-dialog/estado-update-save-dialog.component';
import { ConfirmationDialogComponent } from '../../confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-estado-list',
  templateUrl: './estado-list.component.html',
  styleUrls: ['./estado-list.component.scss']
})
export class EstadoListComponent implements OnInit {

  displayedColumns: string[] = [
    'idEstado',
    'estado',
    'opciones'
  ];

  public dataSource:MatTableDataSource<Estado>;
  @ViewChild(MatPaginator) paginator: MatPaginator; 
  @ViewChild(MatSort) sort:MatSort;

  constructor(
    public servicioEstado: EstadoService,
    public matDialog: MatDialog,
    public snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.getEstados();
  }

  getEstados(){
    this.servicioEstado.findAll().subscribe(res=>{
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
    let datos = {saveBool : true, text : 'estado'};

    let matDialogRef = this.matDialog.open(
      EstadoUpdateSaveDialogComponent, 
      this.retornarMatDialogConfig(datos)
    );

    matDialogRef.afterClosed().subscribe(result=>{
      if(result != null){
        this.abrirSnackBar(result, 'OK');
        this.getEstados();
      }
    });

  }

  actualizar(idEstado: string){
    let data = {saveBool : false, text : ""+idEstado};

    let matDialogRef = this.matDialog.open(
      EstadoUpdateSaveDialogComponent, 
      this.retornarMatDialogConfig(data)
    );

    matDialogRef.afterClosed().subscribe(result=>{
      if(result != null){
        this.abrirSnackBar(result, 'OK');
        this.getEstados();
      }
    });

  }

  eliminar(idEstado: string){
    let data = {
      title : "Eliminar estado", 
      body : "¿Esta usted seguro de querer eliminar el estado " +
      "con id " + idEstado + "?"
    };
    
    let matDialogRef = this.matDialog.open(
      ConfirmationDialogComponent,
      this.retornarMatDialogConfig(data)
    );

    matDialogRef.afterClosed().subscribe(result=>{
      if(result == true){
        this.servicioEstado.delete(idEstado).subscribe(
          data=>{
            this.abrirSnackBar(data.mensaje, 'OK');
            this.getEstados();
          },
          error=>{
            this.abrirSnackBar(error.error.mensaje, 'OK');
          }
        );}

      });

  }

}
