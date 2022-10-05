import mongoose, {Document, model, Model} from 'mongoose';
import { IPlayer } from "./players.model";
const { Schema } = mongoose;

export interface ITeam extends Document {
    name: string;
    thumbnail: string;
    players: IPlayer[];
}

const TeamSchema = new Schema<ITeam>({
    name: { type: String, required: false },
    thumbnail: { type: String, required: false },
    players: [{ type: Schema.Types.ObjectId, ref: 'Player' }]
});

export const TeamsModel: Model<ITeam> = mongoose.model<ITeam>('Team', TeamSchema);
