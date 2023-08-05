"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenAIChatCompletionsMessageRole = exports.Provider = exports.Personality = exports.SberbankImagesGenerationsModel = exports.OraCompletionsModel = exports.LlamaChatCompletionsModel = exports.HuggingFaceDocumentsAskModel = exports.GoogleCompletionsModel = exports.AnthropicChatCompletionsModel = exports.OpenAIModerationsModel = exports.OpenAIChatCompletionsModel = exports.SberbankEndpoint = exports.OraEndpoint = exports.LlamaEndpoint = exports.HuggingFaceEndpoint = exports.GoogleEndpoint = exports.AnthropicEndpoint = exports.PurGPTEndpoint = exports.OpenAIEndpoint = exports.RequestMethod = void 0;
var RequestMethod;
(function (RequestMethod) {
    RequestMethod["Get"] = "GET";
    RequestMethod["Post"] = "POST";
})(RequestMethod || (exports.RequestMethod = RequestMethod = {}));
;
var OpenAIEndpoint;
(function (OpenAIEndpoint) {
    OpenAIEndpoint["Models"] = "openai/models";
    OpenAIEndpoint["ChatCompletions"] = "openai/chat/completions";
    OpenAIEndpoint["Moderations"] = "openai/moderations";
})(OpenAIEndpoint || (exports.OpenAIEndpoint = OpenAIEndpoint = {}));
;
var PurGPTEndpoint;
(function (PurGPTEndpoint) {
    PurGPTEndpoint["Personalities"] = "purgpt/personalities";
})(PurGPTEndpoint || (exports.PurGPTEndpoint = PurGPTEndpoint = {}));
;
var AnthropicEndpoint;
(function (AnthropicEndpoint) {
    AnthropicEndpoint["Models"] = "anthropic/models";
    AnthropicEndpoint["ChatCompletions"] = "anthropic/chat/completions";
})(AnthropicEndpoint || (exports.AnthropicEndpoint = AnthropicEndpoint = {}));
;
var GoogleEndpoint;
(function (GoogleEndpoint) {
    GoogleEndpoint["Models"] = "google/models";
    GoogleEndpoint["Completions"] = "google/completions";
})(GoogleEndpoint || (exports.GoogleEndpoint = GoogleEndpoint = {}));
;
var HuggingFaceEndpoint;
(function (HuggingFaceEndpoint) {
    HuggingFaceEndpoint["Models"] = "hugging-face/models";
    HuggingFaceEndpoint["DocumentsAsk"] = "hugging-face/documents/ask";
})(HuggingFaceEndpoint || (exports.HuggingFaceEndpoint = HuggingFaceEndpoint = {}));
;
var LlamaEndpoint;
(function (LlamaEndpoint) {
    LlamaEndpoint["Models"] = "llama/models";
    LlamaEndpoint["ChatCompletions"] = "llama/chat/completions";
})(LlamaEndpoint || (exports.LlamaEndpoint = LlamaEndpoint = {}));
;
var OraEndpoint;
(function (OraEndpoint) {
    OraEndpoint["Models"] = "ora/models";
    OraEndpoint["Completions"] = "ora/completions";
})(OraEndpoint || (exports.OraEndpoint = OraEndpoint = {}));
;
var SberbankEndpoint;
(function (SberbankEndpoint) {
    SberbankEndpoint["Models"] = "sberbank/models";
    SberbankEndpoint["ImagesGenerations"] = "sberbank/images/generations";
})(SberbankEndpoint || (exports.SberbankEndpoint = SberbankEndpoint = {}));
;
var OpenAIChatCompletionsModel;
(function (OpenAIChatCompletionsModel) {
    OpenAIChatCompletionsModel["GPT-3.5 Turbo"] = "gpt-3.5-turbo";
    OpenAIChatCompletionsModel["GPT-3.5 Turbo 16k"] = "gpt-3.5-turbo-16k";
    OpenAIChatCompletionsModel["TextDavinci003"] = "text-davinci-003";
    OpenAIChatCompletionsModel["ChatBison001"] = "chat-bison-001";
    OpenAIChatCompletionsModel["GPT-3.5 Turbo 16k 0613"] = "gpt-3.5-turbo-16k-0613";
    OpenAIChatCompletionsModel["GPT-3.5 Turbo 0613"] = "gpt-3.5-turbo-0613";
})(OpenAIChatCompletionsModel || (exports.OpenAIChatCompletionsModel = OpenAIChatCompletionsModel = {}));
;
var OpenAIModerationsModel;
(function (OpenAIModerationsModel) {
    OpenAIModerationsModel["TextModerationStable"] = "text-moderation-stable";
    OpenAIModerationsModel["TextModerationLatest"] = "text-moderation-latest";
})(OpenAIModerationsModel || (exports.OpenAIModerationsModel = OpenAIModerationsModel = {}));
;
var AnthropicChatCompletionsModel;
(function (AnthropicChatCompletionsModel) {
    AnthropicChatCompletionsModel["Claude1"] = "claude-1";
    AnthropicChatCompletionsModel["ClaudeInstant1"] = "claude-instant-1";
    AnthropicChatCompletionsModel["Claude2"] = "claude-2";
})(AnthropicChatCompletionsModel || (exports.AnthropicChatCompletionsModel = AnthropicChatCompletionsModel = {}));
;
var GoogleCompletionsModel;
(function (GoogleCompletionsModel) {
    GoogleCompletionsModel["Bard"] = "bard";
})(GoogleCompletionsModel || (exports.GoogleCompletionsModel = GoogleCompletionsModel = {}));
;
var HuggingFaceDocumentsAskModel;
(function (HuggingFaceDocumentsAskModel) {
    HuggingFaceDocumentsAskModel["LayoutlmDocumentQA"] = "layoutlm-document-qa";
})(HuggingFaceDocumentsAskModel || (exports.HuggingFaceDocumentsAskModel = HuggingFaceDocumentsAskModel = {}));
;
var LlamaChatCompletionsModel;
(function (LlamaChatCompletionsModel) {
    LlamaChatCompletionsModel["Llama 2 7b Chat"] = "llama-2-7b-chat";
    LlamaChatCompletionsModel["Llama 2 13b Chat"] = "llama-2-13b-chat";
    LlamaChatCompletionsModel["Llama 2 70b Chat"] = "llama-2-70b-chat";
})(LlamaChatCompletionsModel || (exports.LlamaChatCompletionsModel = LlamaChatCompletionsModel = {}));
;
var OraCompletionsModel;
(function (OraCompletionsModel) {
    OraCompletionsModel["GPT-3.5 Turbo"] = "gpt-3.5-turbo";
})(OraCompletionsModel || (exports.OraCompletionsModel = OraCompletionsModel = {}));
;
var SberbankImagesGenerationsModel;
(function (SberbankImagesGenerationsModel) {
    SberbankImagesGenerationsModel["Kandinsky"] = "kandinsky";
})(SberbankImagesGenerationsModel || (exports.SberbankImagesGenerationsModel = SberbankImagesGenerationsModel = {}));
;
var Personality;
(function (Personality) {
    Personality["ProgrammerAI"] = "programmer-ai";
    Personality["ErrorSummarizer"] = "error-summarizer";
    Personality["Moderator"] = "moderator";
    Personality["Kira"] = "kira";
})(Personality || (exports.Personality = Personality = {}));
;
var Provider;
(function (Provider) {
    Provider["CattoGPT"] = "CattoGPT";
    Provider["ChimeraGPT"] = "ChimeraGPT";
    Provider["Churchless"] = "Churchless";
    Provider["FoxGPT"] = "FoxGPT";
    Provider["Pawan"] = "Pawan";
    Provider["Skailar"] = "Skailar";
    Provider["HuggingFace"] = "Hugging Face";
    Provider["Ora"] = "Ora";
    Provider["Google"] = "Google";
})(Provider || (exports.Provider = Provider = {}));
;
var OpenAIChatCompletionsMessageRole;
(function (OpenAIChatCompletionsMessageRole) {
    OpenAIChatCompletionsMessageRole["System"] = "system";
    OpenAIChatCompletionsMessageRole["User"] = "user";
    OpenAIChatCompletionsMessageRole["Assistant"] = "assistant";
    OpenAIChatCompletionsMessageRole["Function"] = "function";
})(OpenAIChatCompletionsMessageRole || (exports.OpenAIChatCompletionsMessageRole = OpenAIChatCompletionsMessageRole = {}));
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
//# sourceMappingURL=types.js.map