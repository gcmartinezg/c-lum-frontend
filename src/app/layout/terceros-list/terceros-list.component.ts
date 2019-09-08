import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog, MatSnackBar } from '@angular/material';
import { Tercero } from 'src/app/shared/domain/tercero';
import { TercerosSaveDialogComponent } from '../terceros-save-dialog/terceros-save-dialog.component';

const DATOS: Tercero[] = [
  {terceroId: 1, nDocumento: 12345, tDocId: 1, nombre: 'Giovanny Ayala', direccion:'Carrera 100 numero 1-4', telefono:"(032) 2889765", estado: 'S', correo: 'ayala@yopmail.com'},
  {terceroId: 2, nDocumento: 876616, tDocId: 1, nombre: 'Pipe Bueno', direccion:'Avenida 5ta', telefono:"(032) 2889982", estado: 'N', correo:'pbueno@yopmail.com'}
];


@Component({
  selector: 'app-terceros-list',
  templateUrl: './terceros-list.component.html',
  styleUrls: ['./terceros-list.component.scss']
})

export class TercerosListComponent implements OnInit {

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
    public dialog: MatDialog,
    public snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.getTerceros();
  }

  applyFilter(filterValue:string){
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getTerceros(){
    this.dataSource = new MatTableDataSource(DATOS);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  openDialogSave(){
    const dialogRef = this.dialog.open(TercerosSaveDialogComponent, {});
    dialogRef.afterClosed().subscribe(result=>{
      console.log('Dialog cerrado correctamente!');
    });
  }

  update(terceroId:number){
    // TODO falta implementar codigo aqui!
  }

}
