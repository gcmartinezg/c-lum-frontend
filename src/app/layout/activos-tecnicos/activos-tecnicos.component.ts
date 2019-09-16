import { Component, OnInit, ViewChild } from '@angular/core';
import { Tercero } from 'src/app/shared/domain/tercero';
import { MatDialog, MatPaginator, MatSort, MatTableDataSource, MatSnackBar, MatDialogConfig } from '@angular/material';
import { TerceroService } from 'src/app/shared/services/tercero.service';
import { UsuarioService } from 'src/app/shared/services/usuario.service';
import { EstadoService } from 'src/app/shared/services/estado.service';

@Component({
  selector: 'app-activos-tecnicos',
  templateUrl: './activos-tecnicos.component.html',
  styleUrls: ['./activos-tecnicos.component.scss']
})
export class ActivosTecnicosComponent implements OnInit {

  displayedColumns: string[] = [
    'nombreTercero',
    'numeroDocumento',
    'estado'
  ];

  public dataSource:MatTableDataSource<Tercero>;
  @ViewChild(MatPaginator) paginator: MatPaginator; 
  @ViewChild(MatSort) sort:MatSort;
  
  constructor(public matDialog: MatDialog,
    public snackBar: MatSnackBar,
    public servicioTercero: TerceroService,
    public servicioUsuario: UsuarioService,
    public servicioEstado: EstadoService
    ) { }

  ngOnInit() {
    this.getTerceros();
  }
  getTerceros(){
    this.servicioTercero.findAll().subscribe(res=>{
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

}
