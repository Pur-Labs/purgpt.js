import Chat from '../../src/v1/classes/Chat';
import request from '../../src/v1/request';
import { apiKey } from '../../test.config';

import { CreateChatCompletionSettings, CreateChatCompletionResponse, RequestMethod, RequestEndpoint, CreateChatCompletionMessageRole, Model, PurGPTKey } from '../../src/v1/types';

jest.mock('../../src/v1/request');

describe('Chat', () => {
    const key = apiKey as PurGPTKey;
    const chat = new Chat(key);

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should create a model response for the given chat conversation', async () => {
        const settings: CreateChatCompletionSettings = {
            messages: [
                { role: CreateChatCompletionMessageRole.User, content: 'Hello' },
                { role: CreateChatCompletionMessageRole.Assistant, content: 'Hi there!' },
            ],
        };

        const expectedResponse: CreateChatCompletionResponse = {
            id: 'chatcmpl-123',
            object: 'chat.completion',
            choices: [
                {
                    index: 0,
                    message: { role: CreateChatCompletionMessageRole.Assistant, content: 'Sure!' },
                    finish_reason: null,
                },
            ],
            created: 1234567890,
            model: Model.Davinci,
            usage: {
                prompt_tokens: 10,
                completion_tokens: 5,
                total_tokens: 15,
            },
        };

        (request as jest.Mock).mockResolvedValue(expectedResponse);

        const response = await chat.createChatCompletion(settings);

        expect(request).toHaveBeenCalledWith(
            key,
            RequestMethod.Post,
            RequestEndpoint.CreateChatCompletion,
            settings
        );
        expect(response).toEqual(expectedResponse);
    });
});