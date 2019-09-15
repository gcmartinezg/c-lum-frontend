import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TipoTransformadorUpdateSaveDialogRoutingModule } from './tipo-transformador-update-save-dialog-routing.module';
import { TipoTransformadorUpdateSaveDialogComponent } from './tipo-transformador-update-save-dialog.component';

@NgModule({
  declarations: [TipoTransformadorUpdateSaveDialogComponent],
  imports: [
    CommonModule,
    TipoTransformadorUpdateSaveDialogRoutingModule
  ]
})
export class TipoTransformadorUpdateSaveDialogModule { }
