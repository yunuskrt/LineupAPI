import { Module } from '@nestjs/common';
import { MatchesController } from './matches.controller';
import { MatchesService } from './matches.service';
import { PlayersModule } from 'src/players/players.module';
import { TeamsModule } from 'src/teams/teams.module';
import { ManagersModule } from 'src/managers/managers.module';

@Module({
    imports: [PlayersModule, TeamsModule, ManagersModule],
    controllers: [MatchesController],
    providers: [MatchesService],
})
export class MatchesModule {}
