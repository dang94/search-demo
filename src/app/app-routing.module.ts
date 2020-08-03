import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoSearchComponent } from './demo-search/demo-search.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'search',
    pathMatch: 'full',
  },
  {
    path: 'search',
    component: DemoSearchComponent,
    data: {
      title: 'Demo search'
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
