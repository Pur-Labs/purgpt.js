export enum RequestMethod {
    Get = 'GET',
    Post = 'POST'
};

export enum OpenAIEndpoint {
    Models = 'openai/models',
    ChatCompletions = 'openai/chat/completions',
    Moderations = 'openai/moderations'
};

export enum PurGPTEndpoint {
    Personalities = 'purgpt/personalities'
};

export enum AnthropicEndpoint {
    Models = 'anthropic/models',
    ChatCompletions = 'anthropic/chat/completions'
};

export enum GoogleEndpoint {
    Models = 'google/models',
    Completions = 'google/completions'
};

export enum HuggingFaceEndpoint {
    Models = 'hugging-face/models',
    DocumentsAsk = 'hugging-face/documents/ask'
};

export enum LlamaEndpoint {
    Models = 'llama/models',
    ChatCompletions = 'llama/chat/completions'
};

export enum OraEndpoint {
    Models = 'ora/models',
    Completions = 'ora/completions'
};

export enum SberbankEndpoint {
    Models = 'sberbank/models',
    ImagesGenerations = 'sberbank/images/generations'
};

export enum OpenAIChatCompletionsModel {
    'GPT-3.5 Turbo' = 'gpt-3.5-turbo',
    'GPT-3.5 Turbo 16k' = 'gpt-3.5-turbo-16k',
    TextDavinci003 = 'text-davinci-003',
    ChatBison001 = 'chat-bison-001',
    'GPT-3.5 Turbo 16k 0613' = 'gpt-3.5-turbo-16k-0613',
    'GPT-3.5 Turbo 0613' = 'gpt-3.5-turbo-0613'
};

export enum OpenAIModerationsModel {
    TextModerationStable = 'text-moderation-stable',
    TextModerationLatest = 'text-moderation-latest'
};

export enum AnthropicChatCompletionsModel {
    Claude1 = 'claude-1',
    ClaudeInstant1 = 'claude-instant-1',
    Claude2 = 'claude-2'
};

export enum GoogleCompletionsModel {
    Bard = 'bard'
};

export enum HuggingFaceDocumentsAskModel {
    LayoutlmDocumentQA = 'layoutlm-document-qa'
};

export enum LlamaChatCompletionsModel {
    'Llama 2 7b Chat' = 'llama-2-7b-chat',
    'Llama 2 13b Chat' = 'llama-2-13b-chat',
    'Llama 2 70b Chat' = 'llama-2-70b-chat'
};

export enum OraCompletionsModel {
    'GPT-3.5 Turbo' = 'gpt-3.5-turbo'
};

export enum SberbankImagesGenerationsModel {
    Kandinsky = 'kandinsky'
};

export enum Personality {
    ProgrammerAI = 'programmer-ai',
    ErrorSummarizer = 'error-summarizer',
    Moderator = 'moderator',
    Kira = 'kira'
};

export enum Provider {
    CattoGPT = 'CattoGPT',
    ChimeraGPT = 'ChimeraGPT',
    Churchless = 'Churchless',
    FoxGPT = 'FoxGPT',
    Pawan = 'Pawan',
    Skailar = 'Skailar',
    HuggingFace = 'Hugging Face',
    Ora = 'Ora',
    Google = 'Google'
};

export type RequestEndpoint = OpenAIEndpoint | PurGPTEndpoint | AnthropicEndpoint | GoogleEndpoint | HuggingFaceEndpoint | LlamaEndpoint | OraEndpoint | SberbankEndpoint;

export type PurGPTKey = `purgpt-${string}`;

export enum OpenAIChatCompletionsMessageRole {
    System = 'system',
    User = 'user',
    Assistant = 'assistant',
    Function = 'function'
};

export type OpenAIChatCompletionsRequestStop = string | any[] | null;

export type OpenAIChatCompletionsRequestLogitBias = object | null;

export type OpenAIModerationsRequestInput = string | string[];

export interface ChatCompletionsMessage {
    role: OpenAIChatCompletionsMessageRole;
    content: string;
    name?: string;
    function_call?: object;
};

export interface BaseChatCompletionsRequest {
    messages: ChatCompletionsMessage[];
};

export interface OpenAIChatCompletionsFunctionParametersProperty {
    type: string;
    description: string;
};

export interface OpenAIChatCompletionsFunctionParametersProperties {
    [name: string]: OpenAIChatCompletionsFunctionParametersProperty;
};

export interface OpenAIChatCompletionsFunctionParameters {
    type: 'object';
    properties: OpenAIChatCompletionsFunctionParametersProperties;
    required?: string[];
};

export interface OpenAIChatCompletionsFunction {
    name: string;
    description?: string;
    parameters: OpenAIChatCompletionsFunctionParameters;
};

export interface OpenAIChatCompletionsRequestFunctionCallFunction {
    name: string;
};

export type OpenAIChatCompletionsRequestFunctionCall = 'none' | 'auto' | OpenAIChatCompletionsRequestFunctionCallFunction;

export interface OpenAIChatCompletionsRequest extends BaseChatCompletionsRequest {
    model?: OpenAIChatCompletionsModel;
    personality?: Personality;
    functions?: OpenAIChatCompletionsFunction[];
    function_call?: OpenAIChatCompletionsRequestFunctionCall;
    temperature?: number;
    top_p?: number;
    n?: number;
    stream?: boolean;
    stop?: OpenAIChatCompletionsRequestStop;
    max_tokens?: number;
    presence_penalty?: number;
    frequency_penalty?: number;
    logit_bias?: OpenAIChatCompletionsRequestLogitBias;
    user?: string;
};

export interface BaseChatCompletionsResponseChoicesMessage {
    role: 'assistant';
    content: string;
};

export interface BaseChatCompletionsResponseChoice {
    index: number;
    message: BaseChatCompletionsResponseChoicesMessage;
    finish_reason: any;
};

export interface OpenAIChatCompletionsResponseUsage {
    prompt_tokens: number;
    completion_tokens: number;
    total_characters: number;
};

export interface OpenAIChatCompletionsResponseCacheRecordResponse {
    status: number;
    data?: any;
};

export interface OpenAIChatCompletionsResponseCacheRecord {
    provider: Provider;
    response: OpenAIChatCompletionsResponseCacheRecordResponse;
};

export interface OpenAIChatCompletionsResponseCache {
    message: 'Some of our providers returned with errors. Errors are automatically reported to our developers.';
    records: OpenAIChatCompletionsResponseCacheRecord[];
};

export interface OpenAIChatCompletionsResponseCalledFunctionCall {
    name: string;
    arguments: string;
};

export interface OpenAIChatCompletionsResponseCalledFunctionMessage {
    role: 'function';
    name: string;
    content: string;
};

export interface OpenAIBaseResponse {
    overwritten: boolean;
    provider: Provider;
    cache?: OpenAIChatCompletionsResponseCache;
    calledFunctions: [OpenAIChatCompletionsResponseCalledFunctionCall, OpenAIChatCompletionsResponseCalledFunctionMessage][];
};

export interface BaseResponse {
    created: number;
};

export interface BaseChatCompletionsResponse extends BaseResponse {
    id: string;
    object: 'chat.completion';
    choices: BaseChatCompletionsResponseChoice[];
};

export interface OpenAIChatCompletionsResponse extends OpenAIBaseResponse, BaseChatCompletionsResponse {
    model: OpenAIChatCompletionsModel;
    usage: OpenAIChatCompletionsResponseUsage;
};

export interface OpenAIModerationsRequest {
    input: OpenAIModerationsRequestInput;
    model?: OpenAIModerationsModel;
};

export type OpenAIModerationsResponseId = `modr-${string}`;

export interface OpenAIModerationsResponseResultCategories {
    sexual: boolean;
    hate: boolean;
    harrasment: boolean;
    'self-harm': boolean;
    'sexual/minors': boolean;
    'hate/threatening': boolean;
    'violence/graphic': boolean;
    'self-harm/intent': boolean;
    'self-harm/insturctions': boolean;
    'harrasment/threatening': boolean;
    violence: boolean;
};

export interface OpenAIModerationsResponseResultCategoryScores {
    sexual: number;
    hate: number;
    harrasment: number;
    'self-harm': number;
    'sexual/minors': number;
    'hate/threatening': number;
    'violence/graphic': number;
    'self-harm/intent': number;
    'self-harm/insturctions': number;
    'harrasment/threatening': number;
    violence: number;
};

export interface OpenAIModerationsResponseResult {
    flagged: boolean;
    categories: OpenAIModerationsResponseResultCategories;
    category_scores: OpenAIModerationsResponseResultCategoryScores;
};

export interface OpenAIModerationsResponse extends OpenAIBaseResponse {
    id: OpenAIModerationsResponseId;
    model: OpenAIModerationsModel;
    results: OpenAIModerationsResponseResult[];
};

export type Model = OpenAIChatCompletionsModel | OpenAIModerationsModel | AnthropicChatCompletionsModel | GoogleCompletionsModel | HuggingFaceDocumentsAskModel | LlamaChatCompletionsModel | OraCompletionsModel | SberbankImagesGenerationsModel;

export type OpenAIModel = OpenAIChatCompletionsModel | OpenAIModerationsModel;

export type AnthropicModel = AnthropicChatCompletionsModel;

export type GoogleModel = GoogleCompletionsModel;

export interface BaseModelsResponseModelDonatorLimitsPerDay {
    tier1: number;
    tier2: number;
    tier3: number;
    tier4: number;
};

export interface BaseModelsResponseModel {
    owner: string;
    endpoints: RequestEndpoint[];
    maxTokens: number | null;
    freeLimitPerDay: number;
    donatorLimitsPerDay: BaseModelsResponseModelDonatorLimitsPerDay;
    available: boolean;
    providers: Provider[];
};

export interface OpenAIModelsResponseModel extends BaseModelsResponseModel {
    model: OpenAIModel;
};

export type OpenAIModelsResponse = OpenAIModelsResponseModel[];

export interface PurGPTPersonalitiesResponsePersonality {
    id: Personality;
    owner: string;
    defaultConfig: Partial<OpenAIChatCompletionsRequest>;
    blockedModels: OpenAIChatCompletionsModel[];
    donatorOnly: boolean;
    nsfw: boolean;
};

export type PurGPTPersonalitiesResponse = PurGPTPersonalitiesResponsePersonality[];

export interface AnthropicModelsResponseModel extends BaseModelsResponseModel {
    model: AnthropicModel;
};

export type AnthropicModelsResponse = AnthropicModelsResponseModel[];

export interface AnthropicChatCompletionsRequest extends BaseChatCompletionsRequest {
    model: AnthropicChatCompletionsModel;
    max_tokens_to_sample?: number;
    temperature?: number;
    top_p?: number;
    top_k?: number;
};

export interface AnthropicChatCompletionsResponse extends BaseChatCompletionsResponse {
    model: AnthropicChatCompletionsModel;
};

export interface GoogleModelsResponseModel extends BaseModelsResponseModel {
    model: GoogleModel;
};

export type GoogleModelsResponse = GoogleModelsResponseModel[];

export interface BaseCompletionsRequest {
    prompt: string;
};

export interface GoogleCompletionsRequest extends BaseCompletionsRequest {
    model: GoogleCompletionsModel;
};

export interface GoogleCompletionsResponse extends BaseResponse {
    model: GoogleCompletionsModel;
};

export type HuggingFaceModel = HuggingFaceDocumentsAskModel;

export interface HuggingFaceModelsResponseModel extends BaseModelsResponseModel {
    model: HuggingFaceModel;
};

export type HuggingFaceModelsResponse = HuggingFaceModelsResponseModel[];

export interface HuggingFaceDocumentsAskRequest {
    document: string;
    prompt: string;
};

export interface HuggingFaceDocumentsAskResponseChoiceResult {
    answer: string;
    score: number;
};

export interface HuggingFaceDocumentsAskResponseChoice {
    index: 0;
    result: HuggingFaceDocumentsAskResponseChoiceResult;
    finish_reason: 'stop';
};

export interface HuggingFaceDocumentsAskResponse extends BaseResponse {
    object: 'document.ask';
    model: HuggingFaceDocumentsAskModel;
    choices: HuggingFaceDocumentsAskResponseChoice[];
};

export type LlamaModel = LlamaChatCompletionsModel;

export interface LlamaModelsResponseModel extends BaseModelsResponseModel {
    model: LlamaModel;
};

export type LlamaModelsResponse = LlamaModelsResponseModel[];

export interface LlamaChatCompletionsRequest extends BaseChatCompletionsRequest {
    model: LlamaChatCompletionsModel;
};

export interface LlamaChatCompletionsResponse extends BaseChatCompletionsResponse {
    model: LlamaChatCompletionsModel;
};

export type OraModel = OraCompletionsModel;

export interface OraModelsResponseModel extends BaseModelsResponseModel {
    model: OraModel;
};

export type OraModelsResponse = OraModelsResponseModel[];

export interface OraCompletionsRequest extends BaseCompletionsRequest {
    model: OraCompletionsModel;
};

export interface OraCompletionsResponse extends BaseResponse {
    model: OraCompletionsModel;
};

export type SberbankModel = SberbankImagesGenerationsModel;

export interface SberbankModelsResponseModel extends BaseModelsResponseModel {
    model: SberbankModel;
};

export type SberbankModelsResponse = SberbankModelsResponseModel[];

export interface SberbankImagesGenerationsRequest {
    prompt: string;
    n?: number;
    size?: `${number}x${number}`;
    response_format?: string;
    user?: string;
};

export interface SberbankImagesGenerationsResponseData {
    url?: `https://${string}`;
};

export interface SberbankImagesGenerationsResponse extends BaseResponse {
    data: SberbankImagesGenerationsResponseData[];
};

export interface ErrorResponse {
    status: number;
    error: string;
    code: number;
};

export type Request = OpenAIChatCompletionsRequest | OpenAIModerationsRequest | AnthropicChatCompletionsRequest | GoogleCompletionsRequest | HuggingFaceDocumentsAskRequest | LlamaChatCompletionsRequest | OraCompletionsRequest | SberbankImagesGenerationsRequest;

export type Response = OpenAIChatCompletionsResponse | OpenAIModerationsResponse | AnthropicChatCompletionsResponse | GoogleCompletionsResponse | HuggingFaceDocumentsAskResponse | LlamaChatCompletionsResponse | OraCompletionsResponse | SberbankImagesGenerationsResponse | ErrorResponse;

export interface FetchRequestHeaders {
    'Content-Type': 'application/json';
    Authorization: `Bearer ${PurGPTKey}`;
};

export interface FetchRequest {
    method: RequestMethod;
    headers: FetchRequestHeaders;
    data?: string;
};