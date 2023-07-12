import Personalities from '../../src/v1/classes/Personalities';
import request from '../../src/v1/request';
import { GetPersonalityResponse, Personality, RequestMethod, RequestEndpoint, PurGPTKey } from '../../src/v1/types';
import { apiKey } from '../../test.config';

jest.mock('../../src/v1/request');

describe('Personalities', () => {
    const key = apiKey as PurGPTKey;
    const personalities = new Personalities(key);

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should get the personality information', async () => {
        const personality: Personality = Personality.ProgrammerAI;

        const expectedResponse: GetPersonalityResponse = {
            id: personality,
            defaultSettings: {},
            blockedModels: [],
        };

        (request as jest.Mock).mockResolvedValue(expectedResponse);

        const response = await personalities.getPersonality(personality);

        expect(request).toHaveBeenCalledWith(
            key,
            RequestMethod.Post,
            `${RequestEndpoint.GetPersonalities}/${personality}` as RequestEndpoint
        );
        expect(response).toEqual(expectedResponse);
    });
});