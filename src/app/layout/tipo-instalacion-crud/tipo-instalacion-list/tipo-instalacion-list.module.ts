import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TipoInstalacionListComponent } from './tipo-instalacion-list.component';
import { TipoInstalacionListRoutingModule } from './tipo-instalacion-list-routing.module';
import { FormsModule } from '@angular/forms';
import { 
  MatFormFieldModule, 
  MatInputModule,
  MatTableModule,
  MatSortModule,
  MatIconModule,
  MatButtonModule,
  MatMenuModule,
  MatPaginatorModule,
  MatSnackBarModule,
  MatDialogModule
} from '@angular/material';

@NgModule({
  declarations: [TipoInstalacionListComponent],
  imports: [
    CommonModule,
    TipoInstalacionListRoutingModule,
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
export class TipoInstalacionListModule { }
