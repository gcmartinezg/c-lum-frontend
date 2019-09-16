import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstadoUpdateSaveDialogRoutingModule } from './estado-update-save-dialog-routing.module';
import { EstadoUpdateSaveDialogComponent } from './estado-update-save-dialog.component';

@NgModule({
  declarations: [EstadoUpdateSaveDialogComponent],
  imports: [
    CommonModule,
    EstadoUpdateSaveDialogRoutingModule
  ]
})
export class EstadoUpdateSaveDialogModule { }
