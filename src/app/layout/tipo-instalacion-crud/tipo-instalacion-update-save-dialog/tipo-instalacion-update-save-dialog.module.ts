import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TipoInstalacionUpdateSaveDialogComponent } from './tipo-instalacion-update-save-dialog.component';
import { TipoInstalacionUpdateSaveDialogRoutingModule } from './tipo-instalacion-update-save-dialog-routing.module';

@NgModule({
  declarations: [TipoInstalacionUpdateSaveDialogComponent],
  imports: [
    CommonModule,
    TipoInstalacionUpdateSaveDialogRoutingModule
  ]
})
export class TipoInstalacionUpdateSaveDialogModule { }
