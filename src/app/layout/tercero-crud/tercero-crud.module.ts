import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TerceroCrudRoutingModule } from './tercero-crud-routing.module';
import { TerceroCrudComponent } from './tercero-crud.component';
import { TerceroUpdateSaveDialogComponent } from './tercero-update-save-dialog/tercero-update-save-dialog.component';
import { 
  MatDialogModule, 
  MatSnackBarModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
 } from '@angular/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TerceroCrudComponent, TerceroUpdateSaveDialogComponent],
  imports: [
    CommonModule,
    TerceroCrudRoutingModule,
    MatDialogModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatIconModule
  ],
  entryComponents: [TerceroUpdateSaveDialogComponent]
})
export class TerceroCrudModule { }
