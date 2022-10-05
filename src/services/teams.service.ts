import { ITeam, TeamsModel } from "../models/teams.model";
import {IPlayer, PlayerModel} from "../models/players.model";

export class TeamsService {

    /**
     * Get all teams, populate players
     *
     * @returns {ITeam[]} return arrays of teams with players
     */
    async findAll(): Promise<ITeam[]> {
        const teams: ITeam[] = await TeamsModel
            .find()
            .populate({
                path: 'players',
                model: PlayerModel,
            })
            .lean();

        return teams;
    }

    /**
     * Get players o f a team by its id
     *
     * @param {string} id team id
     *
     * @returns {IPlayer[] | undefined} return an array of team players
     */
    async getPlayers(id: string): Promise<IPlayer[] | undefined>  {
        const team: ITeam | null = await TeamsModel
            .findById(id)
            .populate({
                path: 'players',
                model: PlayerModel,
            })
            .lean();

        return team?.players;
    }
}
