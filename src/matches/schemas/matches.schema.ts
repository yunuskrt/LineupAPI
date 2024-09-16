import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { Manager } from 'src/managers/schemas/managers.schema';
import { Player } from 'src/players/schemas/players.schema';
import { Team } from 'src/teams/schemas/teams.schema';

export type MatchDocument = HydratedDocument<Match>;

@Schema({ _id: false })
export class PlayerAppearance {
  @Prop({ type: Types.ObjectId, ref: 'Player', required: true })  // Reference to Player schema
  id: Player;

  @Prop({ type: Number, default: null, required: false })
  number: number;

  @Prop({ type: String, default: null, required: false })
  position: string;

  @Prop({ type: [String], default: [] })
  actions: string[];
}

@Schema({ _id: false })
export class TeamDetails {
  @Prop({ type: Types.ObjectId, ref: 'Team', required: true })  // Reference to Team schema
  id: Team;

  @Prop({ type: Number, default: null, required: false })
  position: number;

  @Prop({ type: Number, default: null, required: false })
  score: number;

  @Prop({ type: Number, default: null, required: false })
  halfScore: number;

  @Prop({ type: String })
  lineup: string;

  @Prop({ type: Types.ObjectId, ref: 'Manager', required: true })  // Reference to Manager schema
  manager: Manager;

  @Prop({ type: [PlayerAppearance], required: true })
  first11: PlayerAppearance[];

  @Prop({ type: [PlayerAppearance], required: true })
  substitutes: PlayerAppearance[];
}

@Schema()
export class Match {
    @Prop({ required: true })
    type: string;

    @Prop({ required: true })
    league: string;

    @Prop({ required: true })
    country: string;

    @Prop({ required: true })
    season: string;

    @Prop({ required: true })
    round: string;

    @Prop({ required: true })
    date: string;

    @Prop({ default: null, required: false })
    stadium: string;

    @Prop({ default: null, required: false })
    attendance: number;

    @Prop({ default: null, required: false })
    referee: string;

    @Prop({ required: true })
    extraTime: boolean;

    @Prop({ required: true })
    penalty: boolean;

    @Prop({ required: true, type: TeamDetails})
    home: TeamDetails;

    @Prop({ required: true, type: TeamDetails})
    away: TeamDetails;

}

export const MatchSchema = SchemaFactory.createForClass(Match);