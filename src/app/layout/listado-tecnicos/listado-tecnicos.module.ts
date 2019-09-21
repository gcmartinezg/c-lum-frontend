import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListadoTecnicosRoutingModule } from './listado-tecnicos-routing.module';
import { ListadoTecnicosComponent } from './listado-tecnicos.component';
import { TipoMaterialListRoutingModule } from '../tipo-material-crud/tipo-material-list/tipo-material-list-routing.module';
import { MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatIconModule, MatButtonModule, MatMenuModule, MatPaginatorModule, MatSnackBarModule, MatDialogModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { TecnicoQrDialogComponent } from './tecnico-qr-dialog/tecnico-qr-dialog.component';

@NgModule({
  declarations: [ListadoTecnicosComponent, TecnicoQrDialogComponent],
  imports: [
    CommonModule,
    ListadoTecnicosRoutingModule,
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatDialogModule,
  ],
  entryComponents: [TecnicoQrDialogComponent]
})
export class ListadoTecnicosModule { }
