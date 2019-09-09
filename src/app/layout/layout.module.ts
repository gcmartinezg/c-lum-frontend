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
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        LayoutComponent, 
        NavComponent, 
        TopnavComponent, 
        SidebarComponent
    ],
    imports: [
        CommonModule,
        LayoutRoutingModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatMenuModule,
        MatListModule,
        TranslateModule,
    ],
})
export class LayoutModule { }
