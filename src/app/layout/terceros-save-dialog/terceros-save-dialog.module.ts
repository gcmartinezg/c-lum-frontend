import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '../layout.module';
import { TercerosSaveDialogComponent } from './terceros-save-dialog.component';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TercerosSaveDialogComponent],
  imports: [
    CommonModule,
  ]
})
export class TercerosSaveDialogModule { }
