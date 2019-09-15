import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TipoZonaListRoutingModule } from './tipo-zona-list-routing.module';
import { TipoZonaListComponent } from './tipo-zona-list.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatIconModule, MatButtonModule, MatMenuModule, MatPaginatorModule, MatSnackBarModule, MatDialogModule } from '@angular/material';

@NgModule({
  declarations: [TipoZonaListComponent],
  imports: [
    CommonModule,
    TipoZonaListRoutingModule,
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
export class TipoZonaListModule { }
