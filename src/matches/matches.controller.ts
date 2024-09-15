import { Controller,Get, Query } from '@nestjs/common';
import { MatchesService } from './matches.service';

@Controller('api/v1/matches')
export class MatchesController {
    constructor(
        private readonly matchesService: MatchesService, 
    ) {}

    @Get()
    findAll() {
        return this.matchesService.findAll();
    }
}
