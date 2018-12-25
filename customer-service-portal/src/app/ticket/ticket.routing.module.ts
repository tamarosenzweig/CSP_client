import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TicketComponent } from './ticket.component';


const appRoutes: Routes = [
    {
        path: 'ticket', component: TicketComponent, children: [
            // { path: 'aaa', component: TicketComponent},

        ]
        
    },
];

@NgModule({
    imports: [RouterModule.forChild(appRoutes)]
})

export class TicketRoutingModule {
    constructor (){
    }
 }
