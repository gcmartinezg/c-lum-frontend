import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioListRoutingModule } from './usuario-list-routing.module';
import { UsuarioListComponent } from './usuario-list.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatIconModule, MatButtonModule, MatMenuModule, MatPaginatorModule, MatSnackBarModule, MatDialogModule } from '@angular/material';

@NgModule({
  declarations: [UsuarioListComponent],
  imports: [
    CommonModule,
    UsuarioListRoutingModule,
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
export class UsuarioListModule { }
