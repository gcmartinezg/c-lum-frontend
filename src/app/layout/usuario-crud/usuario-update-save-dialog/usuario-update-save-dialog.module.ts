import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioUpdateSaveDialogRoutingModule } from './usuario-update-save-dialog-routing.module';
import { UsuarioUpdateSaveDialogComponent } from './usuario-update-save-dialog.component';

@NgModule({
  declarations: [UsuarioUpdateSaveDialogComponent],
  imports: [
    CommonModule,
    UsuarioUpdateSaveDialogRoutingModule
  ]
})
export class UsuarioUpdateSaveDialogModule { }
