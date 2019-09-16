import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TipoDocumentoUpdateSaveDialogComponent } from './tipo-documento-update-save-dialog.component';
import { TipoDocumentoUpdateSaveDialogRoutingModule } from './tipo-documento-update-save-dialog-routing.module';

@NgModule({
  declarations: [TipoDocumentoUpdateSaveDialogComponent],
  imports: [
    CommonModule,
    TipoDocumentoUpdateSaveDialogRoutingModule
  ]
})
export class TipoDocumentoUpdateSaveDialogModule { }
