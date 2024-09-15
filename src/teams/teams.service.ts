import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Team } from './schemas/teams.schema';

@Injectable()
export class TeamsService {
    constructor(@InjectModel('Team') private readonly teamModel: Model<Team>) {}

    async findAll(): Promise<Team[]> {
        return await this.teamModel.find()
    }
}