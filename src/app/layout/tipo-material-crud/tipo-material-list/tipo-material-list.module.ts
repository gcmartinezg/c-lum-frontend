import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TipoMaterialListRoutingModule } from './tipo-material-list-routing.module';
import { TipoMaterialListComponent } from './tipo-material-list.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatIconModule, MatButtonModule, MatMenuModule, MatPaginatorModule, MatSnackBarModule, MatDialogModule } from '@angular/material';

@NgModule({
  declarations: [TipoMaterialListComponent],
  imports: [
    CommonModule,
    TipoMaterialListRoutingModule,
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
export class TipoMaterialListModule { }
