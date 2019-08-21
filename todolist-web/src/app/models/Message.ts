export class Message {
    status: number;
    message: string;

    constructor(message: string, status: number = 200) {
        this.status = status;
        this.message = message;
    }

}
