import { Injectable } from '@nestjs/common';
import { PlayersService } from 'src/players/players.service';
import { TeamsService } from 'src/teams/teams.service';
import { ManagersService } from 'src/managers/managers.service';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Match } from './schemas/matches.schema';
import { constructMatchRecord } from 'src/utils/conversions';
import { MatchRecord } from './interfaces/matchRecord.interface';

@Injectable()
export class MatchesService {
    constructor(
        @InjectModel('Match') private readonly matchModel: Model<Match>,
        private readonly playersService : PlayersService,
        private readonly teamsService : TeamsService,
        private readonly managersService : ManagersService
    ) {}

    async findRandomMatch(filter : {}) : Promise<null | MatchRecord> {
        // select a random match
        try {
            const randomMatch = await this.matchModel.aggregate([{$match: filter},{ $sample: { size: 1 } }]);
            const match = randomMatch[0]; 
            if (match){

                // get ids of teams, managers and players from match
                const teamIds = [match['home']['id'].toString(),match['away']['id'].toString()];
                const managerIds = [match['home']['manager'].toString(),match['away']['manager'].toString()];
                const playerIds = []
               
                match['home']['first11'].forEach(player => playerIds.push(player['id'].toString()));
                match['home']['substitutes'].forEach(player => playerIds.push(player['id'].toString()));
                match['away']['first11'].forEach(player => playerIds.push(player['id'].toString()));
                match['away']['substitutes'].forEach(player => playerIds.push(player['id'].toString()));

                const teams = await this.teamsService.findTeamsByIdList(teamIds);
                const managers = await this.managersService.findManagersByIdList(managerIds);
                const players = await this.playersService.findPlayersByIdList(playerIds);

                return constructMatchRecord(match,teams,players,managers);
            }
            return null
            
        } catch (error) {
            console.log(error.message)
            return null;
        }
    }
}
