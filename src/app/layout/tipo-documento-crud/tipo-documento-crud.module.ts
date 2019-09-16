import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';import { FormsModule } from '@angular/forms';
import { 
  MatDialogModule, 
  MatSnackBarModule, 
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatOptionModule,
  MatSelectModule
} from '@angular/material';
import { TipoDocumentoCrudRoutingModule } from './tipo-documento-crud-routing.module';
import { TipoDocumentoCrudComponent } from './tipo-documento-crud.component';

@NgModule({
  declarations: [
    TipoDocumentoCrudComponent//TODO FALTA ADICIOANR EL DIALOG AQUI!
  ],
  imports: [
    CommonModule,
    TipoDocumentoCrudRoutingModule,
    FormsModule,
    MatDialogModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatOptionModule,
    MatSelectModule
  ],
  entryComponents: [
    //TODO FALTA ADICIOANR EL DIALOG AQUI!
  ]
})
export class TipoDocumentoCrudModule { }
