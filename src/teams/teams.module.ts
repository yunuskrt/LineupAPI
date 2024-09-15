import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Team, TeamSchema } from './schemas/teams.schema';
import { TeamsService } from './teams.service';

@Module({
    imports: [MongooseModule.forFeature([{name: Team.name, schema: TeamSchema}])],
    providers: [TeamsService],
    exports: [TeamsService],
})
export class TeamsModule {}
