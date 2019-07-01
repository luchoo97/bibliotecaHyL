import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'details/:id', loadChildren: './pages/todo-details/todo-details.module#TodoDetailsPageModule' },
  { path: 'details', loadChildren: './pages/todo-details/todo-details.module#TodoDetailsPageModule'},
  { path: 'ingresar', loadChildren: './ingresar/ingresar.module#IngresarPageModule' },
  { path: 'nosotros', loadChildren: './nosotros/nosotros.module#NosotrosPageModule' },
  { path: 'libros', loadChildren: './libros/libros.module#LibrosPageModule' },
  { path: 'proveedores', loadChildren: './proveedores/proveedores.module#ProveedoresPageModule' },
  { path: 'detailss/:id', loadChildren: './pages/todoo-details/todoo-details.module#TodooDetailsPageModule' },
  { path: 'detailss', loadChildren: './pages/todoo-details/todoo-details.module#TodooDetailsPageModule' },
  { path: 'menu', loadChildren: './menu/menu.module#MenuPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
