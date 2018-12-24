import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { AuthComponent } from '../imports';

const appRoutes: Routes = [
    {
        path: 'auth', component: AuthComponent, children: [
            { path: 'signin', component: SignInComponent},
            {path:'',component: SignInComponent}
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(appRoutes)]
})

export class AuthRoutingModule {
    constructor (){
    }
 }
