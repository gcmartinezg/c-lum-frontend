import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TipoMaterialUpdateSaveDialogRoutingModule } from './tipo-material-update-save-dialog-routing.module';
import { TipoMaterialUpdateSaveDialogComponent } from './tipo-material-update-save-dialog.component';

@NgModule({
  declarations: [TipoMaterialUpdateSaveDialogComponent],
  imports: [
    CommonModule,
    TipoMaterialUpdateSaveDialogRoutingModule
  ]
})
export class TipoMaterialUpdateSaveDialogModule { }
