import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';import { FormsModule } from '@angular/forms';
import { 
  MatDialogModule, 
  MatSnackBarModule, 
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatOptionModule,
  MatSelectModule
} from '@angular/material';
import { TipoDocumentoCrudRoutingModule } from './tipo-documento-crud-routing.module';
import { TipoDocumentoCrudComponent } from './tipo-documento-crud.component';
import { TipoDocumentoUpdateSaveDialogComponent } from './tipo-documento-update-save-dialog/tipo-documento-update-save-dialog.component';

@NgModule({
  declarations: [
    TipoDocumentoCrudComponent,
    TipoDocumentoUpdateSaveDialogComponent
  ],
  imports: [
    CommonModule,
    TipoDocumentoCrudRoutingModule,
    MatDialogModule,
    MatSnackBarModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatOptionModule,
    MatSelectModule,
  ],
  entryComponents: [
    TipoDocumentoUpdateSaveDialogComponent
  ]
})
export class TipoDocumentoCrudModule { }
