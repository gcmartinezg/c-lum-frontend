import { Component, OnInit, ViewChild } from '@angular/core';
import { Tercero } from 'src/app/shared/domain/tercero';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog, MatSnackBar, MatDialogConfig } from '@angular/material';
import { TerceroUpdateSaveDialogComponent } from '../tercero-update-save-dialog/tercero-update-save-dialog.component';

const DATOS: Tercero[] = [
  {terceroId: 1, nDocumento: 12345, tDocId: 1, nombre: 'Giovanny Ayala', direccion:'Carrera 100 numero 1-4', telefono:"(032) 2889765", estado: 'S', correo: 'ayala@yopmail.com'},
  {terceroId: 2, nDocumento: 876616, tDocId: 1, nombre: 'Pipe Bueno', direccion:'Avenida 5ta', telefono:"(032) 2889982", estado: 'N', correo:'pbueno@yopmail.com'}
];

@Component({
  selector: 'app-tercero-list',
  templateUrl: './tercero-list.component.html',
  styleUrls: ['./tercero-list.component.scss']
})
export class TerceroListComponent implements OnInit {
  
  displayedColumns: string[] = [
    'terceroId',
    'nDocumento',
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
    public matDialog: MatDialog,
    public snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.getTerceros();
  }

  getTerceros(){
    this.dataSource = new MatTableDataSource(DATOS);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
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

  actualizar(tercero: Tercero){
    let data = {saveBool : false, id : tercero.terceroId};

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

}
