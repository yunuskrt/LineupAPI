import { Module } from '@nestjs/common';
import { PlayersService } from './players.service';
import { Player, PlayerSchema } from './schemas/players.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    imports: [MongooseModule.forFeature([{ name: Player.name, schema: PlayerSchema }])],
    providers: [PlayersService],
    exports: [PlayersService],
})
export class PlayersModule {}
