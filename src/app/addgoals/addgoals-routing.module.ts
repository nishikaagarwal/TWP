import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddgoalsPage } from './addgoals.page';

const routes: Routes = [
  {
    path: '',
    component: AddgoalsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddgoalsPageRoutingModule {}
