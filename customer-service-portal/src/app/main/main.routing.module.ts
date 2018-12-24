import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { MainScreenComponent } from './main-screen/main-screen.component';


const appRoutes: Routes = [
    {
       
        path: 'main', component: MainComponent, children: [
            { path: 'main-screen', component: MainScreenComponent},
        ]

        
    },
];

@NgModule({
    imports: [RouterModule.forChild(appRoutes)]
})
export class MainRoutingModule {
    constructor (){
    }
 }
