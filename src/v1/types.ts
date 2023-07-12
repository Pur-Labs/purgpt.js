export type PurGPTKey = `purgpt-${string}`;

export type CreateChatCompletionResponseId = `chatcmpl-${string}`;

export enum Model {
    Babbage = 'babbage',
    Davinci = 'davinci',
    TextDavinci001 = 'text-davinci-001',
    Ada = 'ada',
    TextCurie001 = 'text-curie-001',
    TextAda001 = 'text-ada-001',
    CurieInstructBeta = 'curie-instruct-beta',
    DavinciInstructBeta = 'davinci-instruct-beta',
    TextDavinci003 = 'text-davinci-003',
    TextBabbage001 = 'text-babbage-001',
    Curie = 'curie',
    TextDavinci002 = 'text-davinci-002',
    'GPT-3.5' = 'gpt-3.5',
    'GPT-3.5 Turbo' = 'gpt-3.5-turbo',
    'GPT-3.5 Turbo 0301' = 'gpt-3.5-turbo-0301',
    'GPT-3.5 Turbo 0613' = 'gpt-3.5-turbo-0613',
    'GPT-3.5 Turbo 16k' = 'gpt-3.5-turbo-16k',
    'GPT-3.5 Turbo 16k 0613' = 'gpt-3.5-turbo-16k-0613',
    Bard = 'bard',
    Bing = 'bing',
    ChatBison001 = 'chat-bison-001',
    TextBison001 = 'text-bison-001',
};

export enum Personality {
    ProgrammerAI = 'programmer-ai'
};

export enum CreateChatCompletionMessageRole {
    System = 'system',
    User = 'user',
    Assistant = 'assistant'
};

export enum RequestMethod {
    Post = 'POST',
    Get = 'GET'
};

export enum RequestEndpoint {
    CreateChatCompletion = 'chat/completions',
    CreateCompletion = 'completions',
    GetPersonalities = 'personalities'
};

export interface CreateChatCompletionResponseChoiceMessage {
    /**
     * The role of the messages author. One of `system`, `user` or `assistant`.
     */
    role: CreateChatCompletionMessageRole;
    /**
     * The contents of the message.
     */
    content: string;
};

export interface CreateChatCompletionMessage extends CreateChatCompletionResponseChoiceMessage {
    /**
     * The name of the author of this message. May contain a-z, A-Z, 0-9, and underscores, with a maximum length of 64 characters.
     */
    name?: string;
};

export interface BaseCreateCompletionSettings {
    /**
     * What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic.
     * 
     * We generally recommend altering this or `top_p` but not both.
     * @default
     * 1
     */
    temperature?: number;
    /**
     * An alternative to sampling with temperature, called nucleus sampling, where the model considers the results of the tokens with top_p probability mass. So 0.1 means only the tokens comprising the top 10% probability mass are considered.
     * 
     * We generally recommend altering this or `temperature` but not both.
     * @default
     * 1
     */
    top_p?: number;
    /**
     * Number between -2.0 and 2.0. Positive values penalize new tokens based on whether they appear in the text so far, increasing the model's likelihood to talk about new topics.
     * 
     * [See more information about frequency and presence penalties.](https://platform.openai.com/docs/api-reference/parameter-details)
     * @default
     * 0
     */
    presence_penalty?: number;
    /**
     * Number between -2.0 and 2.0. Positive values penalize new tokens based on their existing frequency in the text so far, decreasing the model's likelihood to repeat the same line verbatim.
     * 
     * [See more information about frequency and presence penalties.](https://platform.openai.com/docs/api-reference/parameter-details)
     * @default
     * 0
     */
    frequency_penalty?: number;
};

export interface CreateCompletionSettings extends BaseCreateCompletionSettings {
    /**
     * Id of the model to use.
     */
    model: Model;
    /**
     * The prompt(s) to generate completions for, encoded as a string, array of strings, array of tokens, or array of token arrays.
     * 
     * Note that <|endoftext|> is the document separator that the model sees during training, so if a prompt is not specified the model will generate as if from the beginning of a new document.
     */
    prompt: string | [];
    /**
     * The suffix that comes after a completion of inserted text.
     * @default
     * null
     */
    suffix?: string | null;
    /**
     * The maximum number of [tokens](https://platform.openai.com/tokenizer) to generate in the completion.
     * 
     * The token count of your prompt plus `max_tokens` cannot exceed the model's context length. [Example Python code](https://github.com/openai/openai-cookbook/blob/main/examples/How_to_count_tokens_with_tiktoken.ipynb) for counting tokens.
     * @default
     * 16
     */
    max_tokens?: number;
    /**
     * How many completions to generate for each prompt.
     * 
     * **Note:** Because this parameter generates many completions, it can quickly consume your token quota. Use carefully and ensure that you have reasonable settings for `max_tokens` and `stop`.
     * @default
     * 1
     */
    n?: number;
    /**
     * Whether to stream back partial progress. If set, tokens will be sent as data-only [server-sent events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events#Event_stream_format) as they become available, with the stream terminated by a `data: [DONE]` message. [Example Python code](https://github.com/openai/openai-cookbook/blob/main/examples/How_to_stream_completions.ipynb).
     * @default
     * false
     */
    stream?: boolean;
    /**
     * Include the log probabilities on the `logprobs` most likely tokens, as well the chosen tokens. For example, if `logprobs` is 5, the API will return a list of the 5 most likely tokens. The API will always return the `logprob` of the sampled token, so there may be up to `logprobs+1` elements in the response.
     * 
     * The maximum value for `logprobs` is 5.
     * @default
     * null
     */
    logprobs?: number | null;
    /**
     * Echo back the prompt in addition to the completion
     * @default
     * false
     */
    echo?: boolean;
    /**
     * Up to 4 sequences where the API will stop generating further tokens. The returned text will not contain the stop sequence.
     * @default
     * null
     */
    stop?: string | [] | null;
    /**
     * Generates `best_of` completions server-side and returns the "best" (the one with the highest log probability per token). Results cannot be streamed.
     * 
     * When used with `n`, best_of controls the number of candidate completions and `n` specifies how many to return – `best_of` must be greater than `n`.
     * 
     * **Note:** Because this parameter generates many completions, it can quickly consume your token quota. Use carefully and ensure that you have reasonable settings for `max_tokens` and `stop`.
     * @default
     * 1
     */
    best_of?: number;
};

export interface CreateChatCompletionSettings extends BaseCreateCompletionSettings {
    /**
     * Id of the personality to use.
     */
    personality?: Personality;
    /**
     * Id of the model to use.
     */
    model?: Model;
    /**
     * A list of messages comprising the conversation so far. [Example Python code](https://github.com/openai/openai-cookbook/blob/main/examples/How_to_format_inputs_to_ChatGPT_models.ipynb).
     */
    messages: CreateChatCompletionMessage[];
    /**
     * How many chat completion choices to generate for each input message.
     * @default
     * 1
     */
    n?: number;
    /**
     * If set, partial message deltas will be sent, like in ChatGPT. Tokens will be sent as data-only [server-sent events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events#Event_stream_format) as they become available, with the stream terminated by a `data: [DONE]` message. [Example Python code](https://github.com/openai/openai-cookbook/blob/main/examples/How_to_stream_completions.ipynb).
     * @default
     * false
     */
    stream?: boolean;
    /**
     * Up to 4 sequences where the API will stop generating further tokens.
     * @default
     * null
     */
    stop?: string | [] | null;
    /**
     * The maximum number of [tokens](https://platform.openai.com/tokenizer) to generate in the chat completion.
     * 
     * The total length of input tokens and generated tokens is limited by the model's context length. [Example Python code](https://github.com/openai/openai-cookbook/blob/main/examples/How_to_count_tokens_with_tiktoken.ipynb) for counting tokens.
     * @default
     * Infinity
     */
    max_tokens?: number;
};

export interface PurGPTHeaders {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${PurGPTKey}`
};

export interface CreateChatCompletionResponseChoice {
    index: number;
    message: CreateChatCompletionResponseChoiceMessage;
    finish_reason: string | null;
};

export interface CreateCompletionResponseUsage {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
};

export interface BaseCreateCompletionResponse {
    created: number;
    model: Model;
    usage: CreateCompletionResponseUsage;
};

export interface CreateChatCompletionResponse extends BaseCreateCompletionResponse {
    id: CreateChatCompletionResponseId;
    object: 'chat.completion';
    choices: CreateChatCompletionResponseChoice[];
};

export interface Request {
    method: RequestMethod;
    headers: PurGPTHeaders;
    data?: string;
};

export interface CreateCompletionResponseChoice {
    text: string;
    index: number;
    logprobs: any;
    finish_reason: string | null;
};

export interface CreateCompletionResponse extends BaseCreateCompletionResponse {
    id: `cmpl-${string}`;
    object: 'text_completion';
    choices: CreateCompletionResponseChoice[];
};

export interface GetPersonalityResponseDefaultSettings extends Partial<CreateChatCompletionSettings> {
};

export interface GetPersonalityResponse {
    id: Personality;
    defaultSettings: GetPersonalityResponseDefaultSettings;
    blockedModels: Model[];
};

export type RequestData = CreateChatCompletionSettings | CreateCompletionSettings;

export type RequestResponse = CreateChatCompletionResponse | CreateCompletionResponse | Personality[] | GetPersonalityResponse;