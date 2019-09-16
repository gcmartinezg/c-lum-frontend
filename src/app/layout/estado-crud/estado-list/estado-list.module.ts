import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstadoListRoutingModule } from './estado-list-routing.module';
import { EstadoListComponent } from './estado-list.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatIconModule, MatButtonModule, MatMenuModule, MatPaginatorModule, MatSnackBarModule, MatDialogModule } from '@angular/material';

@NgModule({
  declarations: [EstadoListComponent],
  imports: [
    CommonModule,
    EstadoListRoutingModule,
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
export class EstadoListModule { }
