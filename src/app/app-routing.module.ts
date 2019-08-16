import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RootComponent } from './domain/layout/root/root.component';
import { HomeComponent } from './domain/pages/home/home.component';
import { TournamentComponent } from './domain/competitions/tournament/tournament.component';

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
    
          { path: 'home'          , component: TournamentComponent }
        ]
    }    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
