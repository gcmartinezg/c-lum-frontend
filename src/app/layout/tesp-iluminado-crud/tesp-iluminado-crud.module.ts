import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TespIluminadoListComponent } from './tesp-iluminado-list/tesp-iluminado-list.component';
import { TespIluminadoUpdateSaveDialogComponent } from './tesp-iluminado-update-save-dialog/tesp-iluminado-update-save-dialog.component';
import { TespIluminadoCrudRoutingModule } from './tesp-iluminado-crud-routing.module';
import { FormsModule } from '@angular/forms';
import { 
  MatDialogModule, 
  MatSnackBarModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatOptionModule,
  MatSelectModule
} from '@angular/material';

@NgModule({
  declarations: [TespIluminadoUpdateSaveDialogComponent],
  imports: [
    CommonModule,
    TespIluminadoCrudRoutingModule,
    FormsModule,
    MatDialogModule,
    MatSnackBarModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatOptionModule,
    MatSelectModule,
  ],
  entryComponents: [TespIluminadoUpdateSaveDialogComponent]
})
export class TespIluminadoCrudModule { }
