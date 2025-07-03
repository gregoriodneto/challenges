import { AppException } from "./app.exception";

export class NotFoundException extends AppException {
    constructor(message = 'Not Found') {
        super(message, 404, 'NotFoundException');
    }
}