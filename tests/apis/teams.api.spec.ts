import chai, {expect} from "chai";
import sinonChai from "sinon-chai";
import sinon from 'sinon';
import { Express } from "express";
import { afterEach } from "mocha";

import { TeamsService } from "../../src/services/teams.service";

import { TEAMS_ERROR_ENUM } from "../../src/enums/errors.enum";
import { TEAM_ID, TEAM_PLAYERS_RESPONSE } from "../mocks/teams.mock";
import { testServer } from "../test";
import { TeamsController } from "../../src/apis/teams.api";

chai.use(sinonChai);

let supertest = require('supertest');
let app = require('./../../src/app');

describe('Teams Apis',  () => {
    const app: Express = testServer((app: Express) => {
        app.use('/', TeamsController);
    });

    afterEach(() => {
        sinon.restore();
    });

    describe('/teams API', async () => {
        it('Should GET all teams', async () => {
            await supertest(app)
                .get("/")
                .expect(200)
                .then((response: any) => {
                    expect(response._body).length(3);
                });
        });

        it('Should GET a 404 Error"', async () => {
            sinon.stub(TeamsService.prototype, 'findAll').resolves([]);

            await supertest(app)
                .get("/")
                .expect(404)
                .then((response: any) => {
                    expect(response._body.error).to.be.equal(TEAMS_ERROR_ENUM.TEAMS_NOT_FOUND)
                });
        });
    });


    describe('/teams/players/:id API', async () => {

        it('Should GET team players by _id', async () => {

            await supertest(app)
                .get(`/players/${TEAM_ID}`)
                .expect(200)
                .then((response: any) => {
                    const body = response._body;
                    expect(body).to.be.deep.equal(TEAM_PLAYERS_RESPONSE);
                });
        });

        it('Should GET a 404 Error', async () => {
            sinon.stub(TeamsService.prototype, 'getPlayers').resolves([]);

            await supertest(app)
                .get(`/players/${TEAM_ID}`)
                .expect(404)
                .then((response: any) => {
                    expect(response._body.error).to.be.equal(TEAMS_ERROR_ENUM.TEAM_PLAYERS_NOT_FOUND)
                });
        });
    });
});