import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioCrudRoutingModule } from './usuario-crud-routing.module';
import { UsuarioCrudComponent } from './usuario-crud.component';
import { UsuarioUpdateSaveDialogComponent } from './usuario-update-save-dialog/usuario-update-save-dialog.component';
import { 
  MatDialogModule, 
  MatSnackBarModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatOptionModule,
  MatSelectModule,
  MatRadioModule,
  MatTableModule,
  MatSortModule,
  MatButtonModule,
  MatMenuModule,
  MatPaginatorModule,
 } from '@angular/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [UsuarioCrudComponent, UsuarioUpdateSaveDialogComponent],
  imports: [
    CommonModule,
    UsuarioCrudRoutingModule,
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
    MatRadioModule,
    MatOptionModule,
    MatSelectModule
  ],
  entryComponents: [UsuarioUpdateSaveDialogComponent]
})
export class UsuarioCrudModule { }
