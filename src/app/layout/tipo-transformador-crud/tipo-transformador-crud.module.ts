import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TipoTransformadorCrudRoutingModule } from './tipo-transformador-crud-routing.module';
import { TipoTransformadorCrudComponent } from './tipo-transformador-crud.component';
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
import { TipoTransformadorUpdateSaveDialogComponent } from './tipo-transformador-update-save-dialog/tipo-transformador-update-save-dialog.component';

@NgModule({
  declarations: [TipoTransformadorCrudComponent, TipoTransformadorUpdateSaveDialogComponent],
  imports: [
    CommonModule,
    TipoTransformadorCrudRoutingModule,
    MatDialogModule,
    MatSnackBarModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatOptionModule,
    MatSelectModule,
  ],
  entryComponents: [TipoTransformadorUpdateSaveDialogComponent]
})
export class TipoTransformadorCrudModule { }
