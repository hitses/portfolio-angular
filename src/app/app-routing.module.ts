import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';

const routes: Routes = [
  { path: 'home', component: PortfolioComponent },
  { path: 'about', component: AboutComponent },
  { path: 'item/:id', component: ItemComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
