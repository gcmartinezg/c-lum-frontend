import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TipoDocumentoListComponent } from './tipo-documento-list.component';
import { TipoDocumentoListRoutingModule } from './tipo-documento-list-routing.module';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatIconModule, MatButtonModule, MatMenuModule, MatPaginatorModule, MatSnackBarModule, MatDialogModule } from '@angular/material';

@NgModule({
  declarations: [TipoDocumentoListComponent],
  imports: [
    CommonModule,
    TipoDocumentoListRoutingModule,
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
export class TipoDocumentoListModule { }
