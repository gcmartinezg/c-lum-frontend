import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatFormFieldModule
} from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TopnavComponent } from './components/topnav/topnav.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { NavComponent } from './nav/nav.component';
import { Screen2Component } from './screen2/screen2.component';
import { TercerosListComponent } from './terceros-list/terceros-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatMenuModule,
        MatSidenavModule,
        MatToolbarModule,
        MatFormFieldModule,
        TranslateModule,
    ],
    declarations: [Screen2Component, LayoutComponent, NavComponent, TopnavComponent, SidebarComponent]

})
export class LayoutModule { }
