import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstadoCrudRoutingModule } from './estado-crud-routing.module';
import { EstadoCrudComponent } from './estado-crud.component';
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
import { EstadoUpdateSaveDialogComponent } from './estado-update-save-dialog/estado-update-save-dialog.component';

@NgModule({
  declarations: [EstadoCrudComponent, EstadoUpdateSaveDialogComponent],
  imports: [
    CommonModule,
    EstadoCrudRoutingModule,
    MatDialogModule,
    MatSnackBarModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatOptionModule,
    MatSelectModule,
  ],
  entryComponents: [EstadoUpdateSaveDialogComponent]
})
export class EstadoCrudModule { }
