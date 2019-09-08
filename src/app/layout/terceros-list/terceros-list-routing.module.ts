import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { TercerosListComponent } from "./terceros-list.component";

const routes: Routes = [
    {
        path: "",
        component: TercerosListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TercerosListRoutingModule {}
