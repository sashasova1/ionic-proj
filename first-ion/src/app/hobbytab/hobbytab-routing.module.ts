import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HobbytabPage } from './hobbytab.page';

const routes: Routes = [
  {
    path: '',
    component: HobbytabPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HobbytabPageRoutingModule {}
