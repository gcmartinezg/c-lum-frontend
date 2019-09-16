import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TipoLamparaListComponent } from './tipo-lampara-list/tipo-lampara-list.component';
import { TipoLamparaUpdateSaveDialogComponent } from './tipo-lampara-update-save-dialog/tipo-lampara-update-save-dialog.component';
import { TipoLamparaCrudComponent } from './tipo-lampara-crud.component';
import { TipoLamparaCrudRoutingModule } from './tipo-lampara-crud-routing.module';
import { 
  MatDialogModule, 
  MatSnackBarModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatOptionModule,
  MatSelectModule
} from '@angular/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TipoLamparaCrudComponent, TipoLamparaUpdateSaveDialogComponent],
  imports: [
    CommonModule,
    TipoLamparaCrudRoutingModule,
    FormsModule,
    MatDialogModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatOptionModule,
    MatSelectModule
  ],
  entryComponents: [TipoLamparaUpdateSaveDialogComponent]
})
export class TipoLamparaCrudModule { }
