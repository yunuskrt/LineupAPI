import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TeamDocument = HydratedDocument<Team>;

@Schema()
export class Team {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  image_link: string;

  @Prop({ required: true })
  image_id: string;

  @Prop({ default: null, required: false, type: { name: String, capacity: Number }, _id: false })
  stadium: {
    name: string | null,
    capacity: number | null
  };
}

export const TeamSchema = SchemaFactory.createForClass(Team);