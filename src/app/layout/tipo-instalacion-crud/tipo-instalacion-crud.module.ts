import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TipoInstalacionListComponent } from './tipo-instalacion-list/tipo-instalacion-list.component';
import { TipoInstalacionCrudComponent } from './tipo-instalacion-crud.component';
import { TipoInstalacionCrudRoutingModule } from './tipo-instalacion-crud-routing.module';
import { FormsModule } from '@angular/forms';
import { 
  MatSnackBarModule, 
  MatFormFieldModule, 
  MatInputModule,
  MatIconModule,
  MatOptionModule,
  MatSelectModule,
  MatDialogModule
} from '@angular/material';
import { TipoInstalacionUpdateSaveDialogComponent } from './tipo-instalacion-update-save-dialog/tipo-instalacion-update-save-dialog.component';

@NgModule({
  declarations: [TipoInstalacionCrudComponent, TipoInstalacionUpdateSaveDialogComponent],
  imports: [
    CommonModule,
    TipoInstalacionCrudRoutingModule,
    FormsModule,
    MatDialogModule,
    MatSnackBarModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatOptionModule,
    MatSelectModule,
  ],
  entryComponents:[TipoInstalacionUpdateSaveDialogComponent]
})
export class TipoInstalacionCrudModule { }
