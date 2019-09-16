import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivosTecnicosRoutingModule } from './activos-tecnicos-routing.module';
import { ActivosTecnicosComponent } from './activos-tecnicos.component';
import { FormsModule } from '@angular/forms';
import { MatInputModule, MatFormFieldModule, MatTableModule, MatSortModule, MatIconModule, MatButtonModule, MatMenuModule, MatSnackBarModule, MatPaginatorModule, MatDialogModule } from '@angular/material';

@NgModule({
  declarations: [ActivosTecnicosComponent],
  imports: [
    CommonModule,
    ActivosTecnicosRoutingModule,
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
  ]
})
export class ActivosTecnicosModule { }
