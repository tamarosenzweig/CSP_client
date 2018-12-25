import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainScreenComponent } from './main-screen/main-screen.component';
import { TmpProductComponent } from './tmp-product/tmp-product.component';


const appRoutes: Routes = [
    {
        path: 'product', component: TmpProductComponent, children: [
            { path: '', component: MainScreenComponent },
            { path: 'main-screen', component: MainScreenComponent },
        ]
    },
    { path: '', redirectTo: 'product', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forChild(appRoutes)]
})
export class ProductRoutingModule {
    constructor() {
    }
}
