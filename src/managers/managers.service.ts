import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Manager } from './schemas/managers.schema';

@Injectable()
export class ManagersService {
    constructor(@InjectModel('Manager') private readonly managerModel: Model<Manager>) {}

    async findAll(): Promise<Manager[]> {
        return await this.managerModel.find()
    }
}
