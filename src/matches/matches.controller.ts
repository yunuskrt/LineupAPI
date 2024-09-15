import { Controller,Get, Query } from '@nestjs/common';
import { MatchesService } from './matches.service';

@Controller('api/v1/matches')
export class MatchesController {
    constructor(
        private readonly matchesService: MatchesService, 
    ) {}

    @Get('teams')
    findAll() {
        return this.matchesService.findTeams();
    }

    @Get('players')
    findPlayers() {
        return this.matchesService.findPlayers();
    }

    @Get('managers')
    findManagers() {
        return this.matchesService.findManagers();
    }
}
