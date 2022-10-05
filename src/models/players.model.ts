import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IPlayer extends Document {
    name : string,
    position: string,
    thumbnail: string,
    signin: {
        amount: string,
        currency: string
    },
    born: string
}

export const PlayerSchema = new Schema<IPlayer>({
    name : String,
    position: String,
    thumbnail: String,
    signin: {
        amount: Number,
        currency: String
    },
    born: Date
});

export const PlayerModel: Model<IPlayer> = mongoose.model<IPlayer>('Player', PlayerSchema);