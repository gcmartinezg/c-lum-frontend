import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatSnackBar, MatDialog, MatDialogConfig } from '@angular/material';
import { Tercero } from 'src/app/shared/domain/tercero';
import { TerceroService } from 'src/app/shared/services/tercero.service';
import { UsuarioService } from 'src/app/shared/services/usuario.service';
import { Usuario } from 'src/app/shared/domain/usuario';
import { TecnicoQrDialogComponent } from './tecnico-qr-dialog/tecnico-qr-dialog.component';

@Component({
  selector: 'app-listado-tecnicos',
  templateUrl: './listado-tecnicos.component.html',
  styleUrls: ['./listado-tecnicos.component.scss']
})
export class ListadoTecnicosComponent implements OnInit {

  displayedColumns: string[] = [
    'nombreTercero',
    'numeroDocumento',
    'generarQR'
  ];

  public dataSource:MatTableDataSource<Tercero>;
  @ViewChild(MatPaginator) paginator: MatPaginator; 
  @ViewChild(MatSort) sort:MatSort;
  
  constructor(public matDialog: MatDialog,
    public snackBar: MatSnackBar,
    public servicioTercero: TerceroService,
    public servicioUsuario: UsuarioService
    ) { }

  ngOnInit() {
    this.getListaTecnicos();
  }
  getListaTecnicos(){
    this.servicioUsuario.getListaTecnicos().subscribe(res=>{
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

  generarQR(terceroId: number){
    let coordinadorId = localStorage.getItem('usuario');
    this.servicioTercero.getUsuarioFromTerceroId(""+terceroId).subscribe((usuario:Usuario)=>{
      this.servicioUsuario.generateQR(usuario.usuarioId, coordinadorId).subscribe(qr=>{
        let data = {
          title : "QR de Activacion", 
          body : qr
        };
        let matDialogRef = this.matDialog.open(
          TecnicoQrDialogComponent,
          this.retornarMatDialogConfig(data)
        );
      })
    });

  }

}