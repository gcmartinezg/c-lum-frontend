import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TipoZonaUpdateSaveDialogRoutingModule } from './tipo-zona-update-save-dialog-routing.module';
import { TipoZonaUpdateSaveDialogComponent } from './tipo-zona-update-save-dialog.component';

@NgModule({
  declarations: [TipoZonaUpdateSaveDialogComponent],
  imports: [
    CommonModule,
    TipoZonaUpdateSaveDialogRoutingModule
  ]
})
export class TipoZonaUpdateSaveDialogModule { }
