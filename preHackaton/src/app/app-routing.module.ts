import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DonutComponent } from './components/donut/donut.component';
import { SearchComponent } from './components/search-vale/search.component';

const routes: Routes = [
  {
    path: '',
    component: DonutComponent,
  },
  {
    path: 'search',
    component: SearchComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
