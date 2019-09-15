import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog, MatSnackBar, MatDialogConfig } from '@angular/material';
import { TipoBalasto } from 'src/app/shared/domain/tipo-balasto';
import { TipoBalastroService } from 'src/app/shared/services/tipo-balastro.service';
import { TipoBalastoUpdateSaveDialogComponent } from '../tipo-balasto-update-save-dialog/tipo-balasto-update-save-dialog.component';

@Component({
  selector: 'app-tipo-balasto-list',
  templateUrl: './tipo-balasto-list.component.html',
  styleUrls: ['./tipo-balasto-list.component.scss']
})
export class TipoBalastoListComponent implements OnInit {

  displayedColumns: string[] = [
    'tipoBalastoId',
    'nombreTipoBalasto',
    'idEstado_Estado',
    'opciones'
  ];

  public dataSource:MatTableDataSource<TipoBalasto>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort:MatSort;
  constructor(
    public tipoBalastoService: TipoBalastroService,
    public MatDialog: MatDialog,
    public snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.getTipoBalastos();
  }

  getTipoBalastos(){
    this.tipoBalastoService.findAll().subscribe(
      data=>{
        console.log(data);
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error=>{
      }
    );
  }

  abrirSnackBar(message: string, action: string){
    this.snackBar.open(message, action);
  }

  aplicarFiltro(filterValue: string){
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  retornarMatDialogConfig(datos : any) : MatDialogConfig<any>{
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;

    dialogConfig.data = datos;

    return dialogConfig;
  }

  crear(){
    let datos = {
      saveBool : true,
      text: 'tipoBalasto'
    };
    let matDialogRef = this.MatDialog.open(
      TipoBalastoUpdateSaveDialogComponent,
      this.retornarMatDialogConfig(datos)
    );

    matDialogRef.afterClosed().subscribe(res=>{
      if(res!=null){
        this.abrirSnackBar(res, 'Ok');
        this.getTipoBalastos();
      }
    }, rej=>{});
  }

  actualizar(tipoBalastoId: string){
    let data = {saveBool:false, text:tipoBalastoId};
    let matDialogRef = this.MatDialog.open(
      TipoBalastoUpdateSaveDialogComponent,
      this.retornarMatDialogConfig(data)
    );
    matDialogRef.afterClosed().subscribe(res=>{
      if(res!= null){
        this.abrirSnackBar(res, 'Ok');
        this.getTipoBalastos();
      }
    })
  }

}
