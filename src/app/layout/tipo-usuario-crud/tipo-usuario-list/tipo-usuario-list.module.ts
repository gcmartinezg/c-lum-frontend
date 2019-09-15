import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TipoUsuarioListRoutingModule } from './tipo-usuario-list-routing.module';
import { TipoUsuarioListComponent } from './tipo-usuario-list.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatIconModule, MatButtonModule, MatMenuModule, MatPaginatorModule, MatSnackBarModule, MatDialogModule } from '@angular/material';

@NgModule({
  declarations: [TipoUsuarioListComponent],
  imports: [
    CommonModule,
    TipoUsuarioListRoutingModule,
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
export class TipoUsuarioListModule { }
