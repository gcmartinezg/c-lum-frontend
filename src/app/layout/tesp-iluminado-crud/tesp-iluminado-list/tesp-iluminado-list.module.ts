import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TespIluminadoListRoutingModule } from './tesp-iluminado-list-routing.module';
import { FormsModule } from '@angular/forms';
import { TespIluminadoListComponent } from './tesp-iluminado-list.component';
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
  declarations: [TespIluminadoListComponent],
  imports: [
    CommonModule,
    TespIluminadoListRoutingModule,
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
export class TespIluminadoListModule { }
