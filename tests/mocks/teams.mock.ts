import { ObjectId } from "mongodb";

export const TEAM_ID: any = new ObjectId('5d2d01fdda07b95bb8f16f0a');
export const TEAM_PLAYERS_RESPONSE = [
    {
        _id: "5d2d058cda07b95bb8f16f80",
        born: "1989-06-19T01:37:19.198Z",
        name: "Pierre-Emerick Aubameyang",
        position: "Forward",
        signin: {
            amount: 63750000,
            currency: "eur"
        },
        thumbnail: "https://www.thesportsdb.com/images/media/player/thumb/fnk3u51520755737.jpg"
    },
    {
        _id: "5d2d0653da07b95bb8f16fa8",
        born: "1988-10-16T05:34:19.198Z",
        name: "Mesut Ozil",
        position: "Midfielder",
        signin: {
            amount: 42500000,
            currency: "gpp"
        },
        thumbnail: "https://www.thesportsdb.com/images/media/player/thumb/g0xlkp1510859385.jpg"
    }
];