import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TipoMaterialCrudRoutingModule } from './tipo-material-crud-routing.module';
import { TipoMaterialCrudComponent } from './tipo-material-crud.component';
import { TipoMaterialUpdateSaveDialogComponent } from './tipo-material-update-save-dialog/tipo-material-update-save-dialog.component';
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
  declarations: [TipoMaterialCrudComponent, TipoMaterialUpdateSaveDialogComponent],
  imports: [
    CommonModule,
    TipoMaterialCrudRoutingModule,
    MatDialogModule,
    MatSnackBarModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatOptionModule,
    MatSelectModule,
  ],
  entryComponents:[TipoMaterialUpdateSaveDialogComponent]
})
export class TipoMaterialCrudModule { }
