import { Module } from '@nestjs/common';
import { ManagersService } from './managers.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Manager, ManagerSchema } from './schemas/managers.schema';

@Module({
    imports: [MongooseModule.forFeature([{name: Manager.name, schema: ManagerSchema}])],
    providers: [ManagersService],
    exports: [ManagersService],
})
export class ManagersModule {}
