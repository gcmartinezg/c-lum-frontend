import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TecnicoQrDialogRoutingModule } from './tecnico-qr-dialog-routing.module';
import { TecnicoQrDialogComponent } from './tecnico-qr-dialog.component';

@NgModule({
  declarations: [TecnicoQrDialogComponent],
  imports: [
    CommonModule,
    TecnicoQrDialogRoutingModule
  ]
})
export class TecnicoQrDialogModule { }
