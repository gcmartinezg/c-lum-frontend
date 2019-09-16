import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TipoLamparaUpdateSaveDialogRoutingModule } from './tipo-lampara-update-save-dialog-routing.module';
import { TipoLamparaUpdateSaveDialogComponent } from './tipo-lampara-update-save-dialog.component';

@NgModule({
  declarations: [TipoLamparaUpdateSaveDialogComponent],
  imports: [
    CommonModule,
    TipoLamparaUpdateSaveDialogRoutingModule
  ]
})
export class TipoLamparaUpdateSaveDialogModule { }
