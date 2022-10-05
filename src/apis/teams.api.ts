import {NextFunction, Request, Response, Router} from 'express'
import { TeamsService } from '../services/teams.service';
import { NotFoundException } from '../utils/exceptions';
import { ITeam } from "../models/teams.model";
import { IPlayer } from "../models/players.model";
import { TEAMS_ERROR_ENUM } from "../enums/errors.enum";

const TeamsController = Router();

const teamService = new TeamsService();

/**
 * Get all teams
 */
TeamsController.get('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const teams: ITeam[] = await teamService.findAll();

        if (!teams.length) {
            throw new NotFoundException(TEAMS_ERROR_ENUM.TEAMS_NOT_FOUND);
        }

        return res.status(200).json(teams);
    } catch (error) {
        next(error);
    }
});

/**
 * Get all players of a team
 */
TeamsController.get('/players/:id', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const players: IPlayer[] | undefined = await teamService.getPlayers(id);

        if (!players || players.length === 0) {
            throw new NotFoundException(TEAMS_ERROR_ENUM.TEAM_PLAYERS_NOT_FOUND);
        }
        return res.status(200).json(players);
    } catch (error) {
        next(error);
    }
});

/**
 * On expose notre controller pour l'utiliser dans `src/index.ts`
 */
export { TeamsController };