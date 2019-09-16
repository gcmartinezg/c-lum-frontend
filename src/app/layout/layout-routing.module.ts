import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './layout.component';
import { CoordinadorEditComponent } from './coordinador-edit/coordinador-edit.component';

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
            {
                path: 'tipo-usuario',
                loadChildren: './tipo-usuario-crud/tipo-usuario-crud.module#TipoUsuarioCrudModule'
            },
            {
                path: 'tipo-zona',
                loadChildren: './tipo-zona-crud/tipo-zona-crud.module#TipoZonaCrudModule'
            },
            {
                path: 'estado',
                loadChildren: './estado-crud/estado-crud.module#EstadoCrudModule'
            },
            {
                path: 'tipo-documento',
                loadChildren: './tipo-documento-crud/tipo-documento-crud.module#TipoDocumentoCrudModule'
            },
            {
                path: 'editar-coordinador',
                loadChildren: './coordinador-edit/coordinador-edit.module#CoordinadorEditModule'
            },
            {
                path: 'listado-tecnicos',
                loadChildren: './listado-tecnicos/listado-tecnicos.module#ListadoTecnicosModule'
            },
            {
                path: 'activos-tecnicoss',
                loadChildren: './activos-tecnicos/activos-tecnicos.module#ActivosTecnicosModule'
            },
            {
                path: 'usuario',
                loadChildren: './usuario-crud/usuario-crud.module#UsuarioCrudModule'
            },
            {
                path:'tipo-espacio-iluminado',
                loadChildren: './tesp-iluminado-crud/tesp-iluminado-crud.module#TespIluminadoCrudModule'
            }
            //TODO agregar las demas rutas
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class LayoutRoutingModule {}
