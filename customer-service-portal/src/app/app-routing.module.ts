import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

const appRoutes: Routes = [
  { path: '', redirectTo: '/auth', pathMatch: 'full' },
  { path: 'auth', loadChildren: './auth/auth.module#AuthModule' },
  { path: 'main', loadChildren: './main/main.module#MainModule' }

];


// @NgModule({
//   imports: [RouterModule.forRoot(appRoutes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { 
//   constructor(router: Router, title: Title) {
//     router.events.subscribe((event) => { //fires on every URL change
//         title.setTitle((router.url).replace('/', '').charAt(0).toUpperCase() + (router.url).substr(2).toLowerCase() + ' - Tamar Yankelevich');
//     });
// }
// }
const appRouter: ModuleWithProviders = RouterModule.forRoot(appRoutes);

@NgModule({
  imports: [appRouter]
})

export class AppRoutingModule { }