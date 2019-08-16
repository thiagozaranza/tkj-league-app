import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TournamentComponent } from './tournament/tournament.component';
import { CupComponent } from './cup/cup.component';
import { ChampionshipComponent } from './championship/championship.component';

@NgModule({
  declarations: [TournamentComponent, CupComponent, ChampionshipComponent],
  imports: [
    CommonModule
  ]
})
export class CompetitionsModule { }
