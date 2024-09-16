import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Player } from './schemas/players.schema';

@Injectable()
export class PlayersService {
    constructor(@InjectModel('Player') private readonly playerModel: Model<Player>) {}

    async findPlayersByIdList(playerIds: string[]): Promise<Player[]> {
        return await this.playerModel.find({ _id: { $in: playerIds } });
    }
}
