import { AppException } from "./app.exception";

export class BadRequestException extends AppException {
    constructor(message = 'Bad Request') {
        super(message, 400, 'BadRequestException');
    }
}