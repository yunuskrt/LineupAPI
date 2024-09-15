import { Injectable } from '@nestjs/common';
import { PlayersService } from 'src/players/players.service';
import { Player } from 'src/players/schemas/players.schema';
import { Team } from 'src/teams/schemas/teams.schema';
import { TeamsService } from 'src/teams/teams.service';
import { ManagersService } from 'src/managers/managers.service';

@Injectable()
export class MatchesService {
    constructor(
        private readonly playersService : PlayersService,
        private readonly teamsService : TeamsService,
        private readonly managersService : ManagersService
    ) {}
    
    findTeams() : Promise<Team[]> {
        return this.teamsService.findAll();
    }

    findPlayers() : Promise<Player[]> {
        return this.playersService.findAll();
    }

    findManagers() {
        return this.managersService.findAll();
    }

}
