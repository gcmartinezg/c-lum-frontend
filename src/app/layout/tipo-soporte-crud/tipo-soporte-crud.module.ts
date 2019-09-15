import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TipoSoporteCrudRoutingModule } from './tipo-soporte-crud-routing.module';
import { TipoSoporteCrudComponent } from './tipo-soporte-crud.component';
import { TipoSoporteUpdateSaveDialogComponent } from './tipo-soporte-update-save-dialog/tipo-soporte-update-save-dialog.component';
import { 
  MatDialogModule, 
  MatSnackBarModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatOptionModule,
  MatSelectModule,
 } from '@angular/material';
import { FormsModule } from '@angular/forms';
 
@NgModule({
  declarations: [TipoSoporteCrudComponent, TipoSoporteUpdateSaveDialogComponent],
  imports: [
    CommonModule,
    TipoSoporteCrudRoutingModule,
    MatDialogModule,
    MatSnackBarModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatOptionModule,
    MatSelectModule,
  ],
  entryComponents: [TipoSoporteUpdateSaveDialogComponent]
})
export class TipoSoporteCrudModule { }
