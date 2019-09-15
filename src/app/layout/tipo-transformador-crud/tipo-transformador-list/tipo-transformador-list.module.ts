import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TipoTransformadorListRoutingModule } from './tipo-transformador-list-routing.module';
import { TipoTransformadorListComponent } from './tipo-transformador-list.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatIconModule, MatButtonModule, MatMenuModule, MatPaginatorModule, MatSnackBarModule, MatDialogModule } from '@angular/material';

@NgModule({
  declarations: [TipoTransformadorListComponent],
  imports: [
    CommonModule,
    TipoTransformadorListRoutingModule,
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
export class TipoTransformadorListModule { }
