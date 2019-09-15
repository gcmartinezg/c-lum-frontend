import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TipoUsuarioCrudRoutingModule } from './tipo-usuario-crud-routing.module';
import { TipoUsuarioCrudComponent } from './tipo-usuario-crud.component';
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
import { TipoUsuarioUpdateSaveDialogComponent } from './tipo-usuario-update-save-dialog/tipo-usuario-update-save-dialog.component';

@NgModule({
  declarations: [TipoUsuarioCrudComponent, TipoUsuarioUpdateSaveDialogComponent],
  imports: [
    CommonModule,
    TipoUsuarioCrudRoutingModule,
    MatDialogModule,
    MatSnackBarModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatOptionModule,
    MatSelectModule,
  ],
  entryComponents: [TipoUsuarioUpdateSaveDialogComponent]
})
export class TipoUsuarioCrudModule { }
