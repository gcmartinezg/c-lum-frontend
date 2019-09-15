import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TipoSoporteUpdateSaveDialogRoutingModule } from './tipo-soporte-update-save-dialog-routing.module';
import { TipoSoporteUpdateSaveDialogComponent } from './tipo-soporte-update-save-dialog.component';

@NgModule({
  declarations: [TipoSoporteUpdateSaveDialogComponent],
  imports: [
    CommonModule,
    TipoSoporteUpdateSaveDialogRoutingModule
  ]
})
export class TipoSoporteUpdateSaveDialogModule { }
