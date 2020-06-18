import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'vision',
    loadChildren: () => import('./vision/vision.module').then( m => m.VisionPageModule)
  },
  {
    path: 'plandate',
    loadChildren: () => import('./plandate/plandate.module').then( m => m.PlandatePageModule)
  },
  {
    path: 'addgoals',
    loadChildren: () => import('./addgoals/addgoals.module').then( m => m.AddgoalsPageModule)
  },
  {
    path: 'tacticmodal',
    loadChildren: () => import('./tacticmodal/tacticmodal.module').then( m => m.TacticmodalPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
