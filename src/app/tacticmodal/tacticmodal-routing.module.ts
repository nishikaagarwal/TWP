import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TacticmodalPage } from './tacticmodal.page';

const routes: Routes = [
  {
    path: '',
    component: TacticmodalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TacticmodalPageRoutingModule {}
