import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TerceroListRoutingModule } from './tercero-list-routing.module';
import { TerceroListComponent } from './tercero-list.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatIconModule, MatButtonModule, MatMenuModule, MatPaginatorModule, MatSnackBarModule, MatDialogModule } from '@angular/material';

@NgModule({
  declarations: [TerceroListComponent],
  imports: [
    CommonModule,
    FormsModule,
    TerceroListRoutingModule,
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
export class TerceroListModule { }
