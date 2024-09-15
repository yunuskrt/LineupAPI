import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ManagerDocument = HydratedDocument<Manager>;

@Schema()
export class Manager {
    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    image_link: string;

    @Prop({ required: true })
    image_id: string;

    @Prop({ default: null, required: false })
    date_of_birth: string | null;

    @Prop({ required: true })
    citizenship: string;
}

export const ManagerSchema = SchemaFactory.createForClass(Manager);
// {
// 	“_id”: ObjectId,
// 	“name”: string,
// 	“image_link”: string,
// 	“image_id”: string,
// 	“date_of_birth”: string | null,
// 	“citizenship”: string
// }