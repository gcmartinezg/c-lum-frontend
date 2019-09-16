import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TipoLamparaListComponent } from './tipo-lampara-list.component';
import { TipoLamparaListRoutingModule } from './tipo-lampara-list-routing.module';
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
  declarations: [TipoLamparaListComponent],
  imports: [
    CommonModule,
    TipoLamparaListRoutingModule,
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
    MatDialogModule
  ]
})
export class TipoLamparaListModule { }
