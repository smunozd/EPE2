import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'tabs4', loadChildren: './tabs4/tabs4.module#Tabs4PageModule' },
  { path: 'tabs5', loadChildren: './tabs5/tabs5.module#Tabs5PageModule' },
  { path: 'tabs6', loadChildren: './tabs6/tabs6.module#Tabs6PageModule' },
  { path: 'tabs7', loadChildren: './tabs7/tabs7.module#Tabs7PageModule' },
  { path: 'tabs8', loadChildren: './tabs8/tabs8.module#Tabs8PageModule' },
  { path: 'tabs9', loadChildren: './tabs9/tabs9.module#Tabs9PageModule' },
  { path: 'tabs10', loadChildren: './tabs10/tabs10.module#Tabs10PageModule' },
  { path: 'tabs11', loadChildren: './tabs11/tabs11.module#Tabs11PageModule' },
  { path: 'tabs12', loadChildren: './tabs12/tabs12.module#Tabs12PageModule' },
  { path: 'tabs13', loadChildren: './tabs13/tabs13.module#Tabs13PageModule' },
  { path: 'tabs14', loadChildren: './tabs14/tabs14.module#Tabs14PageModule' },
  { path: 'tabs4', loadChildren: './tabs4/tabs4.module#Tabs4PageModule' },
  { path: 'modal-page', loadChildren: './modal-page/modal-page.module#ModalPagePageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
