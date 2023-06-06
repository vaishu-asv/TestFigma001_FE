import { ShareComponent } from './share/share.component';
import { CreatewhatifComponent } from './createwhatif/createwhatif.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'createwhatif', component: CreatewhatifComponent },

  { path: 'share', component: ShareComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestRoutingModule { }
