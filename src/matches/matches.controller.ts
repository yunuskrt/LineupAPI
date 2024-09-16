import { Controller, Get, Query } from '@nestjs/common';
import { MatchesService } from './matches.service';

@Controller('api/v1/matches')
export class MatchesController {
    constructor(
        private readonly matchesService: MatchesService, 
    ) {}

    @Get()
    findMatches(@Query('type') type, @Query('league') league, @Query('season') season, @Query('country') country, @Query('round') round) {
        const filters = [];
        if (type)
            filters.push({type});
        if (league)
            filters.push({league});
        if (season)
            filters.push({season});
        if (country)
            filters.push({country});
        if (round)
            filters.push({round});

        const filter = filters.length > 0 ? {$and:filters} : {};

        return this.matchesService.findRandomMatch(filter);
    }

}
