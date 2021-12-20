import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './Component/detail/detail.component';
import { ListComponent } from './Component/list/list.component';

const routes: Routes = [{
  path:"", component:ListComponent
},
{
  path:"detail/:id", component:DetailComponent
},
{ path:"**", component:ListComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
