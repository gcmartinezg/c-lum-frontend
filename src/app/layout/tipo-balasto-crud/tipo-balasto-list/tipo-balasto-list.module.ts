import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TipoBalastoListComponent } from './tipo-balasto-list.component';
import { FormsModule } from '@angular/forms';
import { TipoBalastoListRoutingModule } from './tipo-balasto-list-routing.module';
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
  declarations: [TipoBalastoListComponent],
  imports: [
    CommonModule,
    FormsModule,
    TipoBalastoListRoutingModule,
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
  ]
})
export class TipoBalastoListModule { }
