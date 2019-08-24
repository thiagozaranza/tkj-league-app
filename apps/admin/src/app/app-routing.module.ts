import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RootComponent } from './layout/root/root.component';
import { TeamsIndexComponent } from './teams/teams-index/teams-index.component';

const routes: Routes = [
    {
        path: '',
        component: RootComponent, 
        children:  [
          { 
            path: '', 
            redirectTo: 'home', 
            pathMatch: 'full' 
          },
    
          { path: 'home'          , component: TeamsIndexComponent }
        ]
    }    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
