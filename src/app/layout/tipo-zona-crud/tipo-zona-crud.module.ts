import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TipoZonaCrudRoutingModule } from './tipo-zona-crud-routing.module';
import { TipoZonaCrudComponent } from './tipo-zona-crud.component';
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
import { TipoZonaUpdateSaveDialogComponent } from './tipo-zona-update-save-dialog/tipo-zona-update-save-dialog.component';

@NgModule({
  declarations: [TipoZonaCrudComponent, TipoZonaUpdateSaveDialogComponent],
  imports: [
    CommonModule,
    TipoZonaCrudRoutingModule,
    MatDialogModule,
    MatSnackBarModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatOptionModule,
    MatSelectModule,
  ],
  entryComponents: [TipoZonaUpdateSaveDialogComponent]
})
export class TipoZonaCrudModule { }
