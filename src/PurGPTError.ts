export default class PurGPTError extends Error {
    response?: object | string;

    constructor(message: string, response?: object | string) {
        super(message);

        this.name = 'PurGPTError';
        this.response = response;
    };
};