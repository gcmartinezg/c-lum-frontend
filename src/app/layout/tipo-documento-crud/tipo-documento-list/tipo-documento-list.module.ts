import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TipoDocumentoListComponent } from './tipo-documento-list.component';
import { TipoDocumentoListRoutingModule } from './tipo-documento-list-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TipoDocumentoListComponent],
  imports: [
    CommonModule,
    TipoDocumentoListRoutingModule,
    FormsModule
  ]
})
export class TipoDocumentoListModule { }
