import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, {HydratedDocument} from 'mongoose';

export type PlayerDocument = HydratedDocument<Player>;

@Schema()
export class Player {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  image_link: string;

  @Prop({ required: true })
  image_id: string;

  @Prop({ default: null, required: false })
  date_of_birth: string;

  @Prop({ required: true })
  citizenship: string;

  @Prop({ default: null , required: false })
  height: number;

  @Prop({ required: true })
  position: string;

  @Prop({ default: null })
  foot: string;
}

export const PlayerSchema = SchemaFactory.createForClass(Player);

// {
// 	“_id”: ObjectId,
// 	“name”: string,
// 	“image_link”: string,
// 	“image_id”: string,
// 	“date_of_birth”: string | null,
// 	“citizenship”: string,
// 	“height”: int | null,
// 	“position”: string,
// 	“foot”: string | null
// }