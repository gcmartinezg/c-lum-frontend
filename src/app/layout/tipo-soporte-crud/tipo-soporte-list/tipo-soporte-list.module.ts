import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TipoSoporteListRoutingModule } from './tipo-soporte-list-routing.module';
import { TipoSoporteListComponent } from './tipo-soporte-list.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatIconModule, MatButtonModule, MatMenuModule, MatPaginatorModule, MatSnackBarModule, MatDialogModule } from '@angular/material';

@NgModule({
  declarations: [TipoSoporteListComponent],
  imports: [
    CommonModule,
    TipoSoporteListRoutingModule,
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
export class TipoSoporteListModule { }
