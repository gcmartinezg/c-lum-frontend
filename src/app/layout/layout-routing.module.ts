import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                redirectTo: 'dashboard'
            },
            {
                path: 'dashboard',
                loadChildren: './dashboard/dashboard.module#DashboardModule'
            },
            {
                path: 'terceros',
                loadChildren: './tercero-crud/tercero-crud.module#TerceroCrudModule'
            },
            {
                path: 'tipo-material',
                loadChildren: './tipo-material-crud/tipo-material-crud.module#TipoMaterialCrudModule'
            },
            {
                path: 'tipo-balasto',
                loadChildren: './tipo-balasto-crud/tipo-balasto-crud.module#TipoBalastoCrudModule'
            },
            {
                path: 'tipo-soporte',
                loadChildren: './tipo-soporte-crud/tipo-soporte-crud.module#TipoSoporteCrudModule'
            },
            {
                path: 'tipo-transformador',
                loadChildren: './tipo-transformador-crud/tipo-transformador-crud.module#TipoTransformadorCrudModule'
            },
            //TODO agregar las demas rutas
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class LayoutRoutingModule {}
