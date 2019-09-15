import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TipoUsuarioUpdateSaveDialogRoutingModule } from './tipo-usuario-update-save-dialog-routing.module';
import { TipoUsuarioUpdateSaveDialogComponent } from './tipo-usuario-update-save-dialog.component';

@NgModule({
  declarations: [TipoUsuarioUpdateSaveDialogComponent],
  imports: [
    CommonModule,
    TipoUsuarioUpdateSaveDialogRoutingModule
  ]
})
export class TipoUsuarioUpdateSaveDialogModule { }
