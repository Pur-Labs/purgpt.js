import * as PurGPT from '../../src/v1/index';
import Chat from '../../src/v1/classes/Chat';
import Personalities from '../../src/v1/classes/Personalities';
import request from '../../src/v1/request';
import { CreateCompletionSettings, Model, PurGPTKey } from '../../src/v1/types';

jest.mock('../../src/v1/request');
jest.mock('../../src/v1/classes/Chat');
jest.mock('../../src/v1/classes/Personalities');

describe('PurGPT', () => {
    const key = process.env.TEST_KEY as PurGPTKey;
    const purgpt = new PurGPT.PurGPT(key);

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should create a model completion', async () => {
        const settings: CreateCompletionSettings = { prompt: 'Hello', model: 'davinci' as Model };
        const expectedResponse = { id: 'cmpl-123', object: 'text_completion', choices: [] };

        (request as jest.Mock).mockResolvedValue(expectedResponse);

        const response = await purgpt.createCompletion(settings);

        expect(request).toHaveBeenCalledWith(
            key,
            'POST',
            'completions',
            settings
        );
        expect(response).toEqual(expectedResponse);
    });

    it('should get the available personalities', async () => {
        const expectedResponse = ['programmer-ai'];

        (request as jest.Mock).mockResolvedValue(expectedResponse);

        const response = await purgpt.getPersonalities();

        expect(request).toHaveBeenCalledWith(
            key,
            'GET',
            'personalities'
        );
        expect(response).toEqual(expectedResponse);
    });

    it('should create a Chat instance', () => {
        expect(purgpt.chat).toBeInstanceOf(Chat);
    });

    it('should create a Personalities instance', () => {
        expect(purgpt.personalities).toBeInstanceOf(Personalities);
    });
});